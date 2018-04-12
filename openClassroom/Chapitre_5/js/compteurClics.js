var bouttonClic = document.getElementById("clic");
var nbrClic =  0;
var btnDesactiver = document.getElementById("desactiver");

function clic () {
	nbrClic++;
	document.getElementById("compteurClics").innerHTML = nbrClic;
}

bouttonClic.addEventListener("click", clic);

btnDesactiver.addEventListener("click", function() {
	bouttonClic.removeEventListener("click", clic);
});