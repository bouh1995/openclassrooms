var articlesElt = document.querySelector("#articles");

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function(response) {

	//Transforme la réponse en un tableau d'articles
	var articles = JSON.parse(response);
	articles.forEach(function(article) {
		//Ajout du titre et du contenu de chaque article
		var titreElt = document.createElement("h3");
		titreElt.textContent = article.titre;
		var contenuElt = document.createElement("p");
		contenuElt.textContent = article.contenu;
		articlesElt.appendChild(titreElt);
		articlesElt.appendChild(contenuElt);
	});
});


var premMinElt = document.querySelector("#premMin");
ajaxGet('https://www.data.gouv.fr/api/1/organizations/premier-ministre/', function(response) {
	var premierMinistreElt = JSON.parse(response);
	//Ajout de la déscription et du logo à la page web
	var descriptionElt = document.createElement("p");
	descriptionElt.textContent = premierMinistreElt.description;
	var logoElt = document.createElement("img");
	logoElt.src = premierMinistreElt.logo;
	premMinElt.appendChild(descriptionElt);
	premMinElt.appendChild(logoElt);
});

//Accés à la méteo de Lyon avec la clé 6e17d55b0a5e23c8
ajaxGet("https://api.wunderground.com/api/6e17d55b0a5e23c8/conditions/q/Meknes.json", function(response) {
	var meteo = JSON.parse(response);
	//Récupération de certains résultats
	var temperature = meteo.current_observation.temp_c;
	var humidite = meteo.current_observation.relative_humidity;
	var imageUrl = meteo.current_observation.icon_url;
	//Affichage des résultats 
	var conditionElt = document.createElement("div");
	conditionElt.textContent = "Il fait actuellement " + temperature + "°C et l'humidité est de " + humidite;
	var imageElt = document.createElement("img");
	imageElt.src = imageUrl;
	var meteoElt = document.querySelector('#meteo');
	meteoElt.appendChild(conditionElt);
	meteoElt.appendChild(imageElt);
});