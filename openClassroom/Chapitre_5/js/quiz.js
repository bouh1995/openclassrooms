//Liste des questions à afficher. UNe question est définie par son énoncé et sa réponse
var questions = [
	{
 		enonce: "Combien font 2 + 2 ?",
 		reponse: "2 + 2 = 4"
	},
	{
		enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
		reponse: "1492"		
	},
	{
		enonce: "On me trouve deux fois dans l'année, une fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
		reponse: "La lettre N"
	}
];
/*
var i = 1; //Pour numéroter les questions

questions.forEach(function(question) {

	//Enoncé de la questions
	var titreElt = document.createElement("strong");
	titreElt.textContent = "Question " + i + " : ";

	//Enoncé des la question
	var textEnonceElt = document.createElement("i");
	textEnonceElt.textContent = question.enonce;

	//Enonce de une question
	var enonceElt = document.createElement("div");
	enonceElt.appendChild(titreElt);
	enonceElt.appendChild(textEnonceElt);

	//Zone de réponse contient intialiement un boutton
	var zoneReponseElt = document.createElement("div");
	var bouttonElt = document.createElement("button");
	bouttonElt.textContent = "Afficher la réponse";
	zoneReponseElt.appendChild(bouttonElt);

	bouttonElt.addEventListener("click", function(){
		var reponseElt = document.createElement("div");
		reponseElt.textContent = question.reponse;
		zoneReponseElt.innerHTML = "";
		zoneReponseElt.appendChild(reponseElt);
	});

	var questionElt = document.createElement("p");
	questionElt.appendChild(enonceElt);
	questionElt.appendChild(zoneReponseElt);
	document.getElementById("contenu").appendChild(questionElt);
});
*/

var conteneur = document.getElementById("contenu");
var cpt = 1;
questions.forEach(function(question) {

	var str = document.createElement("strong");
	var btn = document.createElement("button");
	var ques = document.createElement("i");
	var para = document.createElement("p");

	str.textContent = "Question " + cpt++ + " : ";
	ques.textContent = question.enonce;
	btn.textContent = "Affichez la réponse";

	btn.addEventListener("click", function() {
		var rep = document.createElement("p");
		rep.textContent = question.reponse;
		conteneur.replaceChild(rep, this);
	});

	para.appendChild(str);
	para.appendChild(ques);	
	conteneur.appendChild(para);
	conteneur.appendChild(btn);
}); 