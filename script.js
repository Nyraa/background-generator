var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//background is in body tag, give it id 'gradient'
var body = document.getElementById("gradient");
//button
var button = document.querySelector("button");

//show color code works for green and red
function getBackgroundColor() {
	body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value +")";
	css.textContent = body.style.background + ";";
}
window.onLoad = getBackgroundColor();

//change background color:
//body.style.backround = "red";

//before Function
//color1.addEventListener("input", function() {
//	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
//})

// color2.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// })

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

//button
function setRandColor() {
	color1.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16); 
	color2.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	setGradient(); 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//for button
button.addEventListener("click", setRandColor)

//copy button






