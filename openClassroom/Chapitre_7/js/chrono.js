var boutton = document.querySelector('button');
var compteurElt = document.getElementById('compteur');

var demarrer = false;
var interValId = null;

function augmenterCompteur() {
	var compteur = Number(compteurElt.textContent);
	compteurElt.textContent = ++compteur;
}

boutton.addEventListener('click', function() {
	if(!demarrer) {
		boutton.textContent = "Arreter";
		interValId = setInterval(augmenterCompteur, 1000);
	} else {
		boutton.textContent = "Démarrer";
		clearInterval(interValId)
	}

	demarrer = !demarrer;
});