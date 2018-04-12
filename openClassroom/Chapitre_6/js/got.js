//Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
	{
		code: "ST",
		nom: "Stark"
	}, 
	{
		code: "LA",
		nom: "Lannister"
	},
	{
		code: "BA",
		nom: "Barratheon"
	},
	{
		code: "TA",
		nom: "Targaryen"
	}
];

//Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnes(codeMaison) {
	switch(codeMaison) {
		case "ST":

        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];

    case "LA":

        return ["Tywin", "Cersei", "Jaime", "Tyrion"];

    case "BA":

        return ["Robert", "Stannis", "Renly"];

    case "TA":

        return ["Aerys", "Daenerys", "Viserys"];

    default:

        return [];

    }
}

var persos = document.getElementById('persos');
var maisonElt = document.getElementById('maison');

//On remplit la liste déroulante avec des options ayant pour value le code la maison et pour textContent leur nom de celle-ci.
maisons.forEach(function(maison) {
	var option = document.createElement("option");
	option.value = maison.code;
	option.textContent = maison.nom;
	maisonElt.appendChild(option);	
});

maisonElt.addEventListener('change', function(Event) {
	persos.innerHTML = ""; //On vide la liste a puce
	//On récupére le tableau de personnages de la maison sélétionnée
	var maison = getPersonnes(Event.target.value);
	//On remplit la liste à puce
	maison.forEach(function(perso) {
		var li = document.createElement('li');
		li.textContent = perso;
		persos.appendChild(li);
	});
});
