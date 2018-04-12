
/* Exécute un appel AJAX GET 
   Elle prend en paramètres l'url cible, et la fonction callback appellées en cas de succées
   
   Cette fonction est dite générique : elle n'est pas spécifique à un contexte ou à des données particuliers, et peut etre utilisées 
   Dans tout programme JS qui a besoins de faire des appels AJAX.
   
   Le terme callback utilisé ici comme nom du second paramètre est souvent employé pour désigner une fonction appelée ultérieurement,
   en réaction à un certain événement.	
*/

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