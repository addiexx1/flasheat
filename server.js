const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

const MongoDBStore = require('connect-mongodb-session')(session);
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let db;

let restaurants = [];
const PORT = process.env.PORT || 3000;
app.set("view engine", "pug");

// {session db: sessionA4; collection: sessiondata}
let mongoStore = new MongoDBStore({
    uri: 'mongodb://localhost:27017/sessionA4',
    collection: 'sessiondata'
  });

// middlewares
app.use(session({
    secret: 'some secret here', 
    store: mongoStore, // store in mongo
    resave: true,
    saveUninitialized: false
}));   
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET '/'   - home page
app.get(['/', '/home'], (req, res, next)=>{
    res.render("home", {session:req.session});
    
});
// GET '/orders'    - order form
app.get('/orders', (req, res, next)=>{
    res.render(path.join(__dirname, 'public','orderform.html')); 
});
// GET '/signup'  - user registration page
app.get('/signup', (req, res, next)=>{
    res.render("signup", {duplicate:false}); 
});

// GET '/login' - login page
app.get('/login', (req, res, next)=>{
    res.render("login", {DNE:false, session:req.session}); 
});
// GET '/logout' - update session to loggedOut
app.get("/logout", logout);

// GET and POST - user profile
app.get("/users/:userID", sendUserProfile);
app.post("/users/:userID",changePrivacy);
// POST login data, signup data
app.post("/login", login);
app.post('/signup', signup);


// Login
function login(req, res, next){
	if(req.session.loggedin){
		res.status(200).send("Already logged in.");
		return;
	}
    // post from form
    let username = req.body.username;
    let password = req.body.password;

    console.log("Username: " + username);
    console.log("Password: " + password);

    // check if username exists
    db.collection("users").findOne({"username": username}, (err, result)=>{
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
        // username does not exists, re-render the signin page and show the alert message
        if(!result){
			res.render('login', {DNE:true, session:req.session});
            return;
		}
        else{
            if(password === result.password){
                req.session.loggedin = true;
                req.session.username = username;
                req.session.userid = result["_id"].toString();
                res.status(200).redirect("http://localhost:3000/");
            }
            else{
                res.status(401).send("Not authorized. Invalid password.");
            }
        }
    });

}

// Logout
function logout(req, res, next){
	if(req.session.loggedin){
		req.session.loggedin = false;
        req.session.username = undefined;
        req.session.userid = undefined;
		res.status(200).redirect("http://localhost:3000/");
	}else{
		res.status(200).send("You cannot log out because you aren't logged in.");
	}
}




// POST '/signup'   - user post {username, password} to sign up
function signup (req, res, next){

    let userData = req.body;
    userData.privacy = false;

    // check if username exists
    db.collection("users").findOne({"username": req.body.username}, (err, result)=>{
		if(err){
			res.status(500).send("Error reading database.");
			return;
		}
        // username already exists, re-render the signup page and show the alert message
        if(result){
			res.render('signup', {duplicate:true});
            return;
		}

        // if DNE, then store in db
        db.collection("users").insertOne(userData, (err, results)=>{
            if(err){
                res.status(500).send("Error saving to database.");
                return;
            }
            let newID = results.insertedId;
            console.log("newid:", newID);
            req.session.loggedin = true;
            req.session.username = req.body.username;
            req.session.userid = newID.toString();
            //Redirect to user profile users/:userID
            res.status(201).redirect("http://localhost:3000/users/" + newID);
        });

    });

}

// GET '/users'  - list of users, non-private, or private but logged in 
app.get('/users', (req, res, next)=>{
    console.log(req.query.name);
    // if user entered /users?name=someText, then find the usernames contain the text and provicy is false, if not, return 10 users
    if(req.query.name){
        db.collection("users").find({username: {$regex: new RegExp(".*" + req.query.name + ".*", "i")}, privacy:false}).toArray(function(err,result){
            if(err){
                res.status(500).send("Error reading database.");
                return;
            }
            else{
                res.render('users',{session:req.session,users: result});
            }

        });
    }
    // regex(new RegExp(".*" + req.query.name + ".*", "i")
    else{
        db.collection("users").find({privacy:false}).limit(10).toArray(function(err,result){
            if(err){
                res.status(500).send("Error reading database.");
                return;
            }
            else{
                res.render('users',{session:req.session,users: result});
            }           
        });
    }

});

// GET 'users/:userID'  - user profile,  can view loggedin or not private

function sendUserProfile(req, res, next){
    let oid;
    try{
        oid = new mongo.ObjectId(req.params.userID);
    }catch{
        res.status(400).send("Bad request. ");
        return;
    }
    
    db.collection("users").findOne({"_id":oid}, function(err, result){
        if(err){
            res.status(500).send("Error reading database.");
            return;
        }
        if(!result){
            res.status(404).send("Unknown ID");
            return;
        }
        else{
            // Not private
            if(result.privacy == false ){
                res.status(200).render("userProfile", {user: result, session:req.session, updated:false});
            }
            // private but logged in
            else if(req.session.username === result.username){
                res.status(200).render("userProfile", {user: result, session:req.session, updated:false});
            }
            else{
                res.status(404).send("User was not found or you are not authorized to view");
            }
            
        }

    });
    
}

// POST '/users/:userID' to update privacy setting
function changePrivacy(req, res, next){
    let oid;
    try{
        oid = new mongo.ObjectId(req.params.userID);
    }catch{
        res.status(400).send("Bad request. ");
        return;
    }
    console.log(req.body.privacy);
    let privacy;
    if(req.body.privacy == 'true'){
        privacy = true;
    }
    else{
        privacy = false;
    }

    db.collection("users").findOne({"_id":oid}, function(err, result){
        if(err){
            res.status(500).send("Error reading database.");
            return;
        }
        if(!result){
            res.status(404).send("Unknown ID");
            return;
        }
        else{
            // if session loggedin id == userID
            if(req.session.userid.toString() == req.params.userID){
                db.collection("users").updateOne({username: req.session.username}, {$set: {privacy: privacy}},(err, updatedUser)=>{
                    if (err) throw err;
                    res.status(200).render("userProfile", {user: result, session:req.session, updated:true});
                });

            }
            else{
                res.status(404).send("You are not authorized to update! ");
            }
            
        }

    });

}

// Initialize database connection
MongoClient.connect("mongodb://localhost:27017/", function(err, client) {
  if(err) throw err;

  //set db to a4 usres database while running mongod
  db = client.db('a4');

  // Start server once Mongo is initialized
  app.listen(PORT, () => console.log(`Server running on port ${PORT} http://127.0.0.1:${PORT}/`));
});
