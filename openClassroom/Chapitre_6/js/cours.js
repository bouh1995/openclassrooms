
var pseudoElt = document.getElementById('pseudo');
pseudoElt.value = "Bouh"; //On accéde à la valeur d'une zone de texte d'un grace à la propriété value

//Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener('focus', function() {
	document.getElementById('aidePseudo').textContent = "Entrez votre pseudo";
});
//Suppression d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener('blur', function() {
	document.getElementById('aidePseudo').textContent = "";
});

pseudoElt.focus(); //On met le Focus sur la zone de texte
pseudoElt.blur(); //On enléve le Focus de la zone de texte 

//Affichage de la demande de confirmation d'envoie d'email
document.getElementById('confirmation').addEventListener('change', function(Event) {
	console.log("Demande de confirmation : " + Event.target.checked);
});

//Affichage du type d'abonnement choisie
var aboElts = document.getElementsByName('abonnement');
for(i = 0; i < aboElts.length; i++) {
	aboElts[i].addEventListener('change', function(Event) {
		console.log('Formule d\'abonnement choisie : ' +  Event.target.value);
	});	
}

//Affichage du code de nationalité choisi
document.getElementById('nationalite').addEventListener('change', function(Event) {
	console.log('Code de nationalité : ' + Event.target.value);
});

var form = document.querySelector('form');
console.log("Nombre de champs saisie : " + form.elements.length);
console.log(form.elements[0].name); //Affiche "pseudo" (accés à un champs grace à son indice)
console.log(form.elements.mdp.type); //Affiche password (accés à un champs grace à son attribut name)
 
//Soumission du formulaire
//Affichage de toutes les données saisies ou choisies
form.addEventListener('submit', function(Event) {
	var pseudo = form.elements.pseudo.value;
	var mdp = form.elements.mdp.value;
	var courriel = form.elements.courriel.value;
	
	console.log('Vous avez choisi le pseudo ' + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel);
	
	if(form.elements.confirmation.checked) {
		console.log("Vous avez demandé une confirmation d'inscription par courriel");
	} else {
		console.log("Vous n'avez pas demandé une confirmation d'inscription par courriel");
	}

	switch(form.elements.abonnement.value) {
		case "abonewspromo" : 
			console.log('Vous vous etes abonné(e) à la newsletter et aux promotions'); break;
		case "abonews" : 
			console.log('Vous vous etes abonné(e) à la newsletter'); break;
		case "abonewspromo" : 
			console.log('Vous vous n\'etes abonné(e) à rien'); break;
		default: 
			console.log('Erreur : code d\'abonnement non reconnu');
	}

	switch(form.elements.nationalite.value) {
		case 'FR' :
		 console.log('Vous etes français(e)'); break;
		case 'BE' :
		 console.log('Vous etes belge'); break;
		 case 'SUI' :
		 console.log('Vous etes suisse'); break;	
		 default :
		 console.log('Erreur : code de nationalité non reconnu'); break;
	}
	
	Event.preventDefault(); //Annulation de l'envoie des données
});


//Validation pendant la saisie du mot de passe
document.getElementById('mdp').addEventListener('input', function(Event) {
	var mdp = Event.target.value; //Valeur saisie dans le champs mdp
	var longueurMdp = "faible";
	var couleurMsg = "red"; //Longueur faible => couleur rouge
	if(mdp.length >= 8) {
		longueurMdp = "suffisante";
		couleurMsg = "green"; //Longueur suffisante => couleur verte
	} else if(mdp.length >= 4) {
		longueurMdp = "moyenne";
		couleurMsg = "orange"; //Longueur moyenne => couleur orange
	}
	var aideMdp = document.getElementById('aideMdp');
	aideMdp.textContent = "Longueur : " + longueurMdp; //Texte de l'aide
	aideMdp.style.color = couleurMsg; //Couleur du texte de l'aide
});

//Validation en fin de saisi du courriel
document.getElementById('courriel').addEventListener('blur', function(Event) {
	//Correspond à une chaine de type xxx@yyy.zzz
	//Event.target.value.indexOf('@') === -1 //on ne testait que la présence du symbole @
	var regexCourriel = /.+@.+\..+/;
	var validCourriel = "";
	if(!regexCourriel.test(Event.target.value)) {
		validCourriel = "courriel invalide";
	}
	document.getElementById('aideCourriel').textContent = validCourriel ;
});