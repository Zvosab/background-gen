var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
var initialColors = document.getElementById("demo").innerHTML = 
	"Initial CSS linear gradient property is:<br>First color: " 
	+ " " +color1.value+" "
	+ "<br>Second color is:"
	+" "+color2.value;
var rndHex = [];
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

 function rndColor()  {
       var randomColorX = Math.floor(Math.random()*16777215).toString(16)
       return "#" + randomColorX
 }

function setAtt(){
	color3.setAttribute("value",rndColor());
	color4.setAttribute("value",rndColor());
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setAtt);