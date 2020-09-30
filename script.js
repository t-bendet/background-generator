var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var input = document.querySelectorAll("input");
var Computed = getComputedStyle(body);
var string = Computed.backgroundImage;
var firstColorStart = string.indexOf("rgb");
var firstColorEnd = string.indexOf(")", firstColorStart);
var secondColorStart = string.lastIndexOf("rgb");
var secondColorEnd = string.indexOf(")", secondColorStart);
var rgbStr1 = string.substring(firstColorStart, firstColorEnd+1);
var rgbStr2 = string.substring(secondColorStart, secondColorEnd+1);
var button = document.querySelector("button");

function RGBToHex(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

color1.value = RGBToHex(rgbStr1);
color2.value = RGBToHex(rgbStr2);
css.textContent = body.style.background + string + ";";



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRanGradient() {
	color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value  
	+ ", " 
	+ color1.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRanGradient);


