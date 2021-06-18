var glasses = 0;
document.getElementById("glasses").innerHTML = glasses;
function makeLemonade(clickPower) {
	glasses = glasses + clickPower
	document.getElementById("glasses").innerHTML = glasses;
}