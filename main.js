var glasses = 0;
var friends = 0;
let water = 20.00;
let sugar = 300;
let lemons = 50;
let money = 0.00;
let customerDelay = 2000;
let glassPrice = 1.00;
document.getElementById("glasses").innerHTML = glasses; //update vars
document.getElementById("water").innerHTML = water.toFixed(2);
document.getElementById("sugar").innerHTML = sugar;
document.getElementById("lemons").innerHTML = lemons;
document.getElementById("money").innerHTML = money.toFixed(2);
function makeLemonade(clickPower) {
	if (water >= 0.25*clickPower && sugar >= 2*clickPower && lemons >=1*clickPower) {
		water -= 0.25 * clickPower; //subtract ingredient totals
		sugar -= 2 * clickPower;
		lemons -= 1 * clickPower;
		glasses = glasses + clickPower; //add lemonade
	} else if (water >= 0 && sugar >= 0 && lemons >= 0){
		maxGlasses = Math.min(water/0.25, sugar/2, lemons) //if there's not enough ingredients to fill the order, make as much as possible
		water -= 0.25 * maxGlasses; //subtract ingredient totals
		sugar -= 2 * maxGlasses;
		lemons -= 1 * maxGlasses;
		glasses = glasses + maxGlasses;
	};
	document.getElementById("glasses").innerHTML = glasses; //update
	document.getElementById("water").innerHTML = water.toFixed(2);
	document.getElementById("sugar").innerHTML = sugar;
	document.getElementById("lemons").innerHTML = lemons;
};

function buyWater(amount) { //buys water
	if (money >= 3) {
		money -= 3;
		water += amount;
		document.getElementById("water").innerHTML = water.toFixed(2);
		document.getElementById("money").innerHTML = money.toFixed(2);
	}
}

function buySugar(amount) { //buys sugar
	if (money >= 5) {
		money -= 5;
		sugar += amount;
		document.getElementById("sugar").innerHTML = sugar;
		document.getElementById("money").innerHTML = money.toFixed(2);
	}
}

function buyLemons(amount) { //buys lemons
	if (money >= 2.5) {
		money -= 2.5; 
		lemons += amount;
		document.getElementById("lemons").innerHTML = lemons; //update
		document.getElementById("money").innerHTML = money.toFixed(2);
	}
}

function buyFriend(){ //hires a friend
    var friendCost = Math.floor(10 * Math.pow(1.1,friends));   //sets friend cost based on friend count  
    if(money >= friendCost){                                   
        friends = friends + 1;       //adds a friend                            
    	money = money - friendCost;     //subtracts money                     
        document.getElementById('friends').innerHTML = friends; //update 
        document.getElementById('money').innerHTML = money;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,friends)); //increases cost of a friend      
    document.getElementById('friendCost').innerHTML = nextCost;  //update
};

var autoSellInterval = window.setInterval(glassAutoSell, customerDelay);//sets interval for customer buying
function glassAutoSell() { //customers buy lemonade
	if (glasses >= 1) {
		glasses--; //remove 1 lemonade
		money = money + glassPrice; //add price to money total
		document.getElementById("money").innerHTML = money.toFixed(2);//update
		document.getElementById("glasses").innerHTML = glasses;
	};
};

window.setInterval(function(){ //main loop updates every second
	makeLemonade(friends); //friends make lemonade
}, 1000);

glassAutoSell();
	
		
		
		