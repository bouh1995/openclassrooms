/*L'objet XMLHttpRequest permet de créer des requetes HTTP en JavaScript. Inventé par MicroSoft pour
  les besoins du navigateur Internet Explorer, cet objet au nom bizzare a été adopté comme standard
  par les autres navigateurs.
  
  Sa méthode open permet de configurer la requete HTTP avant son lancement. Elle prend en paramètres
  le type de la requete HTTP(le plus souvent GET, POST ou PUT), l'URL cible, ainsi qu'un booléen indiquant
  si la requete sera asynchrone ou non.
	
  Sa méthode send envoie la requete la requete HTTP vers l'URL cible fournie à open. Elle prend en paramètre
  l'éventuelle information au serveur (requetes POST, PUT), ou bien null dans le cas d'une requete GET		
  
  Sa propriété responseText contient sous forme textuelle la réponse renvoyée par le serveur à la requete HTTP		
*/

function remplirListe(reponse) {
	langages = reponse.split(';');
	var listeLangages = document.querySelector('#langages');
	langages.forEach(function(langage) {
		EltLangage = document.createElement('li');
		EltLangage.textContent = langage;
		listeLangages.appendChild(EltLangage);
	});
}

ajaxGet('http://localhost/javascript-web-srv/data/langages.txt', remplirListe);


//Version 1
/*
	var req = new XMLHttpRequest();

	// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent

	req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");

	// Gestion de l'événement indiquant la fin de la requête

	req.addEventListener("load", function () {

    // Affiche la réponse reçue pour la requête

    console.log(req.responseText);

});

req.send(null);
*/

//Version 2
/*var req = new XMLHttpRequest();

req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", true);

//Un événement de type load indique la fin du traitement de la requete par le serveur 
req.addEventListener('load', function() {
		if(req.status >= 200 && req.status < 400) { //Le serveur a reussi à traiter la requete
			//Affiche la réponse reçue pour la requete
			console.log(req.responseText);
		} else {
			//Affichage des informations sur l'échec du traitement de la requete
			console.error(req.status + " " + req.statusText);
		}
});

req.addEventListener('error', function() {
	//La requete n'a pas pus atteindre le serveur
	console.error("Erreur réseau");
});

req.send(null);*/