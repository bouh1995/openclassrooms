//Liste des mots du dictionnaire (tableau d'objets)
var mots = [
	{
		terme : "Procastination",
		defintion: "Tendance patholigique à remettre systématiquement au lendemain"
	},
	{
		terme: "Tautologie",
		defintion: "Phrase dont la formulation ne peut etre que vraie"
	},
	{
		terme: "Oxymore",
		defintion: "Figure de style qui réunit dans une meme phrase deux termes sémantiquement opposés"
	}
]

var dlElt = document.createElement("dl"); //Création de la liste déscriptive

//Pour chaque mot on construit une balise <dt> avec le terme et on utilise un balise <dd> avec sa définition

mots.forEach(function (mot){
	var dtElt = document.createElement("dt");
	var ddElt = document.createElement("dd");
	var strong = document.createElement("strong");

	strong.textContent = mot.terme;

	dtElt.appendChild(strong);
	ddElt.textContent = mot.defintion;
	
	dlElt.appendChild(dtElt);
	dlElt.appendChild(ddElt);
});	

document.querySelector('#contenu').appendChild(dlElt);;


/*for(var id in mot) {

	var terme = document.createElement("h4");
	var def = document.createElement("p");

	def.textContent = mot[id].defintiion;
	terme.textContent = mot[id].terme;

	terme.style.margin="0px 0px 0px 0px";
	terme.style.padding="0px 0px 0px 0px";
	def.style.margin = "0px 0px 0px 0px";
	def.style.paddingLeft="35px";

	document.getElementById("contenu").appendChild(terme);
	document.getElementById("contenu").appendChild(def);
}*/