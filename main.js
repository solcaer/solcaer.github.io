var glasses = 0;
var friends = 0;
var parents = 0;
let water = 20.00;
let sugar = 300;
let lemons = 50;
let money = 0.00;
let customerDelay = 2000;
let glassPrice = 1.00;
var buySpeed = 1;
var friendsVisible = false;
var parentsVisible = false;
var signVisible = false;
var parkVisible = false;
document.getElementById("friendClick").innerHTML = "";
document.getElementById("parentClick").innerHTML = "";

document.getElementById("glasses").innerHTML = glasses; //update vars
document.getElementById("water").innerHTML = water.toFixed(2);
document.getElementById("sugar").innerHTML = sugar;
document.getElementById("lemons").innerHTML = lemons;
document.getElementById("money").innerHTML = money.toFixed(2);
document.getElementById("buySpeed").innerHTML = buySpeed;
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
		glasses = glasses + maxGlasses; //add lemonade
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
	};
};

function buySugar(amount) { //buys sugar
	if (money >= 5) {
		money -= 5;
		sugar += amount;
		document.getElementById("sugar").innerHTML = sugar;
		document.getElementById("money").innerHTML = money.toFixed(2);
	};
};

function buyLemons(amount) { //buys lemons
	if (money >= 2.5) {
		money -= 2.5; 
		lemons += amount;
		document.getElementById("lemons").innerHTML = lemons; //update
		document.getElementById("money").innerHTML = money.toFixed(2);
	};
};

function buyFriend(){ //hires a friend
    var friendCost = (10 + friends);   //sets friend cost based on friend count  
    if(money >= friendCost){                                   
        friends = friends + 1;       //adds a friend                            
    	money = money - friendCost;     //subtracts money                     
        document.getElementById('friends').innerHTML = friends; //update 
        document.getElementById('money').innerHTML = money; 
    };
    var nextCost = (10 + friends); //increases cost of a friend      
    document.getElementById('friendCost').innerHTML = nextCost;  //update
};

function buyParent(){ //hires a parent
    var parentCost = (100 + 10*parents);   //sets parent cost based on parent count  
    if(money >= parentCost){                                   
        parents = parents + 1;       //adds a parent                           
    	money = money - parentCost;     //subtracts money                     
        document.getElementById('parents').innerHTML = parents; //update 
        document.getElementById('money').innerHTML = money;  
    };
    var nextCost = (100 + 10*parents); //increases cost of a parent     
    document.getElementById('parentCost').innerHTML = nextCost;  //update
};

function buySign() {
	if (money >= 50) {
		money = money - 50; //buys sign
		buySpeed = 2.0;
		document.getElementById('buySpeed').innerHTML = buySpeed;
		parkVisible = false;
		document.getElementById('buySignButton').innerHTML = ""; //hides this button
	};
};

function buyPark() {
	if (money >= 100) {
		money = money - 100; //buys sign
		buySpeed = 4.0;
		document.getElementById('buySpeed').innerHTML = buySpeed;
		parkVisible = false;
		document.getElementById('buyParkButton').innerHTML = ""; //hides this button
	};
};

//original interval code, setTimeout is better
//var autoSellInterval = window.setInterval(glassAutoSell, customerDelay/buySpeed);//sets interval for customer buying
function glassAutoSell() { //customers buy lemonade
	if (glasses >= 1) {
		glasses--; //remove 1 lemonade
		money = money + glassPrice; //add price to money total
		document.getElementById("money").innerHTML = money.toFixed(2);//update
		document.getElementById("glasses").innerHTML = glasses;
	};
	window.setTimeout(glassAutoSell, customerDelay/buySpeed)
};
window.setTimeout(glassAutoSell, customerDelay/buySpeed)

window.setInterval(function(){ //main loop updates every second
	makeLemonade(friends
	+parents*5);//autoclickers make lemonade
	
	//next lines all control button visibility html
	if (money>=10){friendsVisible = true};
	
	if (friends>=5){parentsVisible = true};
	
	if (friendsVisible){
		document.getElementById('friendClick').innerHTML = '<button type = "button" onClick="buyFriend()">Hire Friend for $<span id=friendCost>'+(10 + friends)+'</span></button><span>     Friends: </span><span id="friends">'+friends+'</span>';
	} else {
		document.getElementById("friendClick").innerHTML = "";
	};
	if (parentsVisible){
		document.getElementById('parentClick').innerHTML = '<button type = "button" onClick="buyParent()">Hire Parent for $<span id=parentCost>'+(100 + 10*parents)+'</span></button><span>     Parents: </span><span id="parents">'+parents+'</span>';
	} else {
		document.getElementById("parentClick").innerHTML = "";
	};
	if (signVisible){
		document.getElementById('buySignButton').innerHTML = '<button type = "button" onClick="buySign()">Bigger Lemonade Sign: $50</button>';
	} else {
		document.getElementById("buySignButton").innerHTML = "";
	};
	if (parkVisible){
		document.getElementById('buyParkButton').innerHTML = '<button type = "button" onClick="buyPark()">Move Stand to Park: $100</button>';
	} else {
		document.getElementById("buyParkButton").innerHTML = "";
	};
	
}, 1000);

