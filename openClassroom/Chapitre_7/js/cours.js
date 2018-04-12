var compteurElt = document.getElementById('compteur');

//Diminue le compteur jusqu'à 0
function diminuerCompteur() {
	//La fonction Number() convertit en nombre le contenue de l'élément compteurElt 
	var compteur = Number(compteurElt.textContent);
	if(compteur > 1) {
		compteurElt.textContent = --compteur;
	} else {
		//Annule l'éxécution répétée
		clearInterval(intervalId);
		
		var titre = document.getElementById('titre');

		titre.textContent = "BOUM !!!";
		
		setTimeout(function() {
			titre.textContent  = "Tout est cassé :(";
		}, 2000)
	}
}

//Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);  


var cadre = document.getElementById('cadre');
var bloc = document.getElementById('bloc');
var vitesse = 20; //Valeur du déplacement en pixels

var largeurBloc	= parseFloat(getComputedStyle(bloc).width);
var animatedId = null;//L'identifiant de l'animation 

//Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
	
	//Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
	var xBloc = parseFloat(getComputedStyle(bloc).left); /*Attention à ne pas utiliser Number pour convertir une chaîne contenant "px" en valeur numérique 
														 : cela ne fonctionne pas et le résultat renvoyé sera NaN(Not a Number).*/
	var xMax = parseFloat(getComputedStyle(cadre).width);

	if(xBloc + largeurBloc <= xMax) {
		
		//Déplacement du bloc
		bloc.style.left = (xBloc + vitesse) + "px";
	
		//Demande au navigateur d'appeller deplacerBloc dés que possible
		/*Le terme "dés que possible" signifie que le navigateur va optmisier la mise à jour
		  de l'animation afin de la rendre fluide.
		*/
		animatedId = requestAnimationFrame(deplacerBloc);
	} else {
		cancelAnimationFrame(deplacerBloc);
		/*bloc.style.left = "0px";
		animationId = requestAnimationFrame(deplacerBloc);
		*/
	}
}

//var animatedId = requestAnimationFrame(deplacerBloc); //Début de l'animation