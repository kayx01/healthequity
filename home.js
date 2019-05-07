var content = document.getElementById("milk");
var button = document.getElementById("show-more");

button.onclick = function() {

if (milk.className == "open") {

milk.className ="";
button.innerHTML = "Show More";

} else{

	milk.className = "open";
	button.innerHTML = "Show Less";
}

};