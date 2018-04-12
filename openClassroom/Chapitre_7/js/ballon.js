var demarrer = document.getElementById('demarrer');
var arreter = document.getElementById('arreter');

var ballon = document.getElementById('ballon');
var cadre = document.getElementById('cadre');

var vitesse = 10; //Valeur du déplacement en pixels

var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null; //Identifiant de l'animation

var xMin = 0; //Position gauche minimale

var direction = 1; //Sens du déplacement : 1 vers la droite, -1 vers la gauche

//Déplace le ballon vers la droite ou vers la gauche
function deplacerBallon() {
	
	xBallon = parseFloat(getComputedStyle(ballon).left);

	var xMax = parseFloat(getComputedStyle(cadre).width);

	//Si le ballon arrive à un des bords du cadre
		if((xBallon + largeurBallon >= xMax) || xBallon < xMin) {
			direction *= -1;
		}
		//Déplace le ballon dans le sens actuel
		ballon.style.left = (xBallon + vitesse * direction) + "px";
		//Demande au navigateur d'appeler deplacerBallon dés que possible
		animationId = requestAnimationFrame(deplacerBallon);
}

demarrer.addEventListener('click', function() {
	//On change l'état des bouttons
	arreter.disabled = false;
	demarrer.disabled = true;
	//Démarre l'animation
	requestAnimationFrame(deplacerBallon)
	}
);
arreter.addEventListener('click', function() {
	//On change l'état des bouttons
	arreter.disabled = true;
	demarrer.disabled = false;
	//Arrete l'animation
	cancelAnimationFrame(animationId);
});

