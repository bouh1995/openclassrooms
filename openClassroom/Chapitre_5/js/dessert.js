
document.querySelector("button").addEventListener("click", function() {

	var nomDessert = prompt("Entrez le nom du nouveau dessert :");

	var dessertElt = document.createElement("li");

	dessertElt.textContent = nomDessert;

	dessertElt.addEventListener("click", function(Event) {
		var nouveauNom = prompt("Modifiez le nom du dessert :", Event.target.textContent);
		Event.target.textContent = nouveauNom;
	});
	document.getElementById("desserts").appendChild(dessertElt);
});