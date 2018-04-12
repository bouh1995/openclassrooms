function infosLiens() {
	var lienElts = document.querySelectorAll("a");
	console.log(lienElts.length);
	console.log("\"" + lienElts[0] + "\"");
	console.log("\"" + lienElts[lienElts.length - 1] + "\"");
}

function possede(id, classe) {
	if(document.getElementById(id) == undefined) {
		console.log("Aucun élément ne posséde l'id : " + id);
	} else {
		if(document.getElementById(id).classList.contains(classe)) {
			console.log("true");
		} else {
			console.log("false");
		}
	}
}


infosLiens();

possede("saxophone", "bois"); //Doit afficher true
possede("saxophone", "cuivre"); //Doit Afficher false
possede("trompette", "cuivre"); //Doit afficher true
possede("contrebasse", "cordes") //Doit afficher une erreur