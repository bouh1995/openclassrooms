
var avion = [ 
	{
		marque: "Airbus",
		couleur: "A320"
	},
	{
		marque: "Airbus",
		couleur: "A380"
	} 
];

console.log(avion);

//la méthode JSON.stringify() transforme un objet JavaScript en chaine de caractères JSON
var textAvion = JSON.stringify(avion);
console.log(textAvion);

//La méthode JSON.parse() transforme une chaine de caratére en format JSON en un objet JavaScript
var avion2 = JSON.parse(textAvion);
console.log(avion2);

//récupération de données au format JSON dépuis le serveur

function handler(reponse) {

	var selection = document.querySelector('#box-office');

	//Transforme la réponse en tableau d'objets JavaScript
	var films = JSON.parse(reponse);

	//Ajoute le titre de chaque film dans la séléction
	films.forEach(function(film) {
		var elementFilm = document.createElement('li');

		elementFilm.textContent =  film.titre;

		selection.appendChild(elementFilm);
	});

}
ajaxGet("http://localhost/javascript-web-srv/data/films.json" , handler);
