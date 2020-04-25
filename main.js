var rgb = document.querySelector("h4");
var body = document.querySelector("#gradient");
var color = document.querySelectorAll(".color");

for(var i = 0; i < color.length; i++){
	color[i].addEventListener("input", function(){
		body.style.background = "linear-gradient(to right, " + color[0].value + " , " + color[1].value + " )"
		rgb.textContent = body.style.background + ";"
	}); 
}
