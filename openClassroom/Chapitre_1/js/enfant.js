/*
Exercice : Afficher l'enfant d'un objet du DOM.

Affiche un enfant d'un objet du DOM.
Le paramétre noeud est l'objet du DOM.
Le paramétre indice est l'indice de l'enfant à afficher.
*/

function afficherEnfant(noeud, indice) {
	if(noeud.nodeType == document.ELEMENT_NODE) {
		if(indice < 0  || indice >= noeud.childNodes.length) {
			console.log("Indice incorrect");
		} else {
			console.log(noeud.childNodes[indice]);
		}
	} else {
		console.log("Type de noeud incorrect");
	}
}

//Doit afficher le noeud h1
afficherEnfant(document.body, 1);

//Doit afficher l'erreur "Indice incorrect".
//L'indice etant négatif.
afficherEnfant(document.body, -1);

//Doit afficher l'erreur "Indice incorrect".
//Le noeud body a moins de 9 noeuds enfants. 
afficherEnfant(document.body, 9);

//Doit afficher l'erreur "Type de noeud incorrect".
//Le premier noeud enfant de body est textuel.
afficherEnfant(document.body.childNodes[0], 0);