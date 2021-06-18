let gamePhase = 0;
var glasses = 0;
let water = 20.00;
let sugar = 300;
let lemons = 50;
let money = 0.00;
let customerDelay = 2000;
let glassPrice = 1.00;
document.getElementById("glasses").innerHTML = glasses;
document.getElementById("water").innerHTML = water.toFixed(2);
document.getElementById("sugar").innerHTML = sugar;
document.getElementById("lemons").innerHTML = lemons;
document.getElementById("money").innerHTML = money.toFixed(2);
function makeLemonade(clickPower) {
	if (water >= 0.25 && sugar >= 2 && lemons >=1) {
		water -= 0.25;
		sugar -= 2;
		lemons -= 1;
		glasses = glasses + clickPower;
	}
	if (gamePhase === 0){
		gamePhase = 1;
	}
	document.getElementById("glasses").innerHTML = glasses;
	document.getElementById("water").innerHTML = water.toFixed(2);
	document.getElementById("sugar").innerHTML = sugar;
	document.getElementById("lemons").innerHTML = lemons;
}

var autoSellInterval = window.setInterval(glassAutoSell, customerDelay);
function glassAutoSell() {
	if (glasses >= 1) {
		glasses--;
		money = money + glassPrice;
		document.getElementById("money").innerHTML = money.toFixed(2);
		document.getElementById("glasses").innerHTML = glasses;
	}
}

glassAutoSell();
	
		
		
		