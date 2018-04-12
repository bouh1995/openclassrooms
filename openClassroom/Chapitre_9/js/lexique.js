var miniLexique = document.querySelector('#mini-lexique');
var liste = document.querySelector('#liste');

var monLexique = ["A","B","C","D","E"];

monLexique.forEach(function(element) {
	var lien = document.createElement('a');
	var lettre = element;
	lien.textContent = " " + lettre + " |" ;
	lien.href = "#";
	lien.addEventListener('click', function(event) {
		event.preventDefault();
		afficherLesMots(lettre)		
	});

	miniLexique.appendChild(lien);
});

function afficherLesMots(lettre) {

	ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre, function(reponse) {
	var mots = JSON.parse(reponse);
	liste.innerHTML = "";
	if(mots.length > 0) {
		mots.forEach(function(mot) {
			//console.log(mot);
			var termeElt = document.createElement('p');
			termeElt.innerHTML = "<strong>" + mot.term + "</strong>";
			termeElt.style.fontSize = "19px"; 

			var definitionElt = document.createElement('div');	
			definitionElt.textContent = mot.definition;
			
			liste.appendChild(termeElt);
			liste.appendChild(definitionElt);
		});		
	} else {
		var erreur = document.createElement('p');
		erreur.textContent = "Aucun mot trouvé pour " + lettre;
		console.log(reponse);
		liste.appendChild(erreur);
		}
	});
} 