//Éxecute un appel AJAX POST
//Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appellée en cas de succés 
//La paramètre isJson permet de permet d'indiquer si l'envoi concerne des données JSON
function ajaxPost(cible, data, callback, isJson) {
	var req = new XMLHttpRequest();
	req.open("POST", cible);
	req.addEventListener("load", function() {
		if(req.status >= 200 && req.status < 400) {
			//Appelle la fonction callback en lui passant la réponse de la requete
			callback(req.responseText);
		} else {
			console.log(req.status + " " + req.statusText + " " + cible);
		}
	});

	req.addEventListener("error", function() {
		console.log("Erreur réseau avec l'URL " + cible);
	});

	if(isJson) {
		//Définit le contenu de la requete comme etant du JSON
		req.setRequestHeader("Content-Type", "application/json");
		//Transforme la donnée de la requete du formet JSON vers le formet texte avant l'envoi
		data = JSON.stringify(data);
	}
	req.send(data);
}

function ajaxGet(url, callback) {
	var req = new XMLHttpRequest();

	req.open("GET", url, true);
	
	req.addEventListener("load", function() {
		if(req.status >= 200 && req.status < 400) {
			//Appel à la fonction callback en lui passant en paramétre la réponse de la requete
			callback(req.responseText);
		} else {
			console.error(req.status +  ' ' + req.statusText  + url)
		}
	});

	req.addEventListener("error", function() {
		console.error("Erreur réseau avec l'URL " + url);
	});
	req.send();
}