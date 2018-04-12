
/* L'objet FormData a été standardisé récemment et permet de simplifier l'envoi des données dans le corps d'une requête HTTP.
   Il peut etre utilisé indépendamment d'un formulaire, en lui ajoutant une à une les données 
   à transmettre grace à sa méthode append(). Cette méthode prend en paramètres le nom et la valeur de la donnée à ajouter.	
*/

var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");

//Envoie de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande, function(reponse) {
	//Affichage dans la console en cas de succés
	console.log("Commande envoyée au serveur");
});

//L'intéret principal de l'objet FormData est de simplifier la soumission d'un formulaire avec AJAX
var form = document.querySelector('form');
//Géstion de la soumission du formulaire
form.addEventListener('submit', function(e) {
	e.preventDefault();
	//Récupération des champs du formulaire
	var data = new FormData(form);
	//Envoie des données du formulaire au serveur
	//La fonction callback est ici vide
	ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function(reponse) {}); 
});

//Création d'un objet représentant un film
var film = {
	titre: "Zootopie",
	annee: "2016",
	realisateur: "Bryon Howard et Rich Moore"
}

//Envoie de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film, function(reponse) {
	//Le film est affiché dans la console en cas de succès 
	console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
}, true); //valeur du paramètre isJson

/*
//Premier exemple
//Création d'un objet FormData
var identite = new FormData();
//Ajout d'information dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
//Création et configuration d'une requete HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php", true);
//Envoie de la requete en incluant l'objet
req.send(identite);
*/