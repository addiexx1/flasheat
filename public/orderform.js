const restaurant_A = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20.00, //The minimum order amount required to place an order
	delivery_charge: 5.00, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

const restaurant_B = {
	name: "Lembas by Legolas",
	min_order: 15.00,
	delivery_charge: 3.99,
	menu: {
		Lembas: {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		Combos: {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

const restaurant_C = {
	name: "Frodo's Flapjacks",
	min_order: 35.00,
	delivery_charge: 6.00,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [restaurant_A, restaurant_B, restaurant_C];

  

/**
 * restaurantSelect: drop-down list to select restaurant
 * container: where categories, menu and order summary display
 * order: object has 3 keys: name, price, quantity
 * orderArr: to store all the orders
 * restaurantIndex: index in the restaurants[]
 */
const restaurantSelect = document.getElementById("restaurantSelect");
restaurantSelect.addEventListener("change", selectRestaurant);
const container = document.getElementById("restaurantContainer");

let orderArr = [];
let restaurantIndex; //index in the restaurants[]


//selectRestaurant(): Display restaurant accourding to user's selection
function selectRestaurant(){
		//confirm with user if clear order array
		if (orderArr.length > 0){
			if(confirm("Changing restaurant will clear your current order(s), do you want to continue?")){
				orderArr = [];
				restaurantIndex =  restaurantSelect.selectedIndex-1;
				display();
			}
			//if not, then update the selected option to the original one
			else{
				restaurantSelect.selectedIndex = restaurantIndex+1;
				return;
			}
			
		}
		else{
			// select index: note that the index 0 is a hidden option "-- select an restaurants --""
			let index =  restaurantSelect.selectedIndex;
			// case: Restaurant A
			if  (index == 1) {
				restaurantIndex = 0;
			}
			// case: Restaurant B 
			if (index == 2){
				restaurantIndex = 1;
			}
			// case: Restaurant C
			if (index == 3){
				restaurantIndex = 2;
			}
			display();
		}
		
}

//display(restaurant), and render HTML page
function display(){
    container.innerHTML = '';
	const restaurant = restaurants[restaurantIndex];
    const menuObj = restaurant.menu; 
	//*****Page Header: name, min_order, delivery_charge *****/
    const pageHeader = `Welcome to ${restaurant.name}! <br>Minimum order: $${restaurant.min_order} Delivery fee: $${restaurant.delivery_charge}`;
    document.getElementById("restaurantHeader").innerHTML = pageHeader;

    //***** category column  ******/
    let categoryDiv = document.createElement("DIV");
    categoryDiv.setAttribute("class", "categoryDiv");
    let categories = `<div class = "categoryHeader">Categories</div>`;
    for (const category in  menuObj){
        //create an anchor link for each <a> for quicker view of menu list
        categories += `<div class = "categories"><a href="#${category}">${category}</a></div>`;
    }
    categoryDiv.innerHTML = categories;
    container.appendChild(categoryDiv);

    //***** menu column ******/
    let menuDiv = document.createElement("DIV");
    menuDiv.setAttribute("class", "menuDiv");
    let menuList = '';
    let menuKeys = Object.keys(menuObj);
    menuKeys.forEach((key)=>{
            //display the category that has id of its category in the menu list
        menuList += `<h3 id="${key}">${key}</h3>`;
            //interate thru each item in the category
            //creat a meanuList div and a div for each item
            // set id and and onclick event of each "+" icon 
			// set price to fixed 2 digits, Number(somenumber).toFixed(2)
        let itemValues = Object.values(menuObj[key]);
        itemValues.forEach((item)=>{
            menuList += `<div class = "menuList"><div>${item.name}   &nbsp&nbsp&nbsp$${Number(item.price).toFixed(2)} 
            <a id = "${item.name}--${item.price}" onclick = "addOrder(this)"><i class="fas fa-plus-circle"></i></a>
            <br><i class = "desc">${item.description}</i></div></div>`;
        });
    });

    menuDiv.innerHTML = menuList;
    container.appendChild(menuDiv);
    

    //***** order summary *****/
    let orderDiv = document.createElement("DIV");
    orderDiv.setAttribute("class", "orderDiv");

	let groupDiv = document.createElement("DIV");
	groupDiv.setAttribute("class", "groupDiv");

	let orderHeader = document.createElement('DIV');
	orderHeader.className = "orderHeader";
	orderHeader.innerText = "Order Summary";
	groupDiv.appendChild(orderHeader);

    let orderDetail = document.createElement("DIV");
	orderDetail.className = "orderDetail";

	//print order details
    let orders = "";
	orderArr.forEach((o,index)=>{
		orders += `<div>${o.quantity} x ${o.name} &nbsp&nbsp$${Number(o.price*o.quantity).toFixed(2)} 
		<i onclick = "removeOrder(this)" id = "${index}" class="fas fa-minus-circle"></i></div>`
	});
	orderDetail.innerHTML = orders;
    groupDiv.appendChild(orderDetail);

	//print total charges
	let totalDiv =  document.createElement("DIV");
	totalDiv.className = "totalDiv";
	let subTotal = calculateTotal();
	let charges = `<div>-----------------------------</div>
	<div>Subtotal: $${Number(subTotal).toFixed(2)}</div>
	<div>GST/HST: $${Number(subTotal*0.1).toFixed(2)}</div>
	<div>Delivery Fee: $${restaurant.delivery_charge}</div>
	<div>Total: $${Number(subTotal*1.1+restaurant.delivery_charge).toFixed(2)}</div>`;

	totalDiv.innerHTML = charges;
	groupDiv.appendChild(totalDiv);
	orderDiv.appendChild(groupDiv);
	container.appendChild(orderDiv);

	// Submit Div
	let submitDiv = document.createElement("DIV");
	let button = document.createElement("BUTTON");

	// if > min_order then append the button, if not create text to add more to order
	if (subTotal < restaurant.min_order){
		submitDiv.innerText = `Add $${Number(restaurant.min_order - subTotal).toFixed(2)} more to order`;
	}
	else{
		button.innerText = "Submit Order"
		submitDiv.appendChild(button);
	}
	groupDiv.appendChild(submitDiv);
	orderDiv.appendChild(groupDiv);
	container.appendChild(orderDiv);
	//alert user the  orders has been submitted on click and reset the page
	button.addEventListener("click",(event)=>{
		alert("Congratulations, your orders has been submitted! Thank you for your business!");
		window.location.reload();
		//event.stopPropagation()
	});


}

//Add order function, creates an order object and store it to orderArr[], if exsits then quantity += 1
function addOrder(link){

	let order = {
		name:'',
		price:0,
		quantity:0
	};
    // link.id = "item.name--item.price" 
    let linkIdArray = link.id.split("--");
	let orderName = linkIdArray[0];
	let orderPrice = linkIdArray[1]
	let bool = false;
  
    orderArr.forEach((item)=>{
		if(item.name == linkIdArray[0]){
           	item.quantity += 1;
			display();
			bool = true;
        }

	});
	if (bool){
		return;
	}
	else{
		order.name = orderName;
		order.price = orderPrice;
		order.quantity = 1;
		orderArr.push(order);
		display();
	}

}

function removeOrder(link){
	let index = link.id;
	if (orderArr[index].quantity <= 1){
		orderArr.splice(index, 1);
	}
	else{
		orderArr[index].quantity -= 1;
	}
	display();

}

function calculateTotal(){
	let subTotal = 0;
	for (let o of orderArr){
		subTotal += o.price*o.quantity;
	}

	return subTotal;
}