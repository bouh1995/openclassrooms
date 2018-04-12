/*
Le DOM représente une page web sous la forme d'un hiérarchie d'objets,
ou chaque objet correspond à un noeud (node) de l'arborescence.
La variable document correspond à l'élément <html> c'est à dire à la racine du DOM.
*/

var h = document.head; //La variable h contient l'objet head du DOM.
console.log(h);

var b = document.body; //La variable b contient l'objet body du DOM.
console.log(b);

/*
Chaque objet de DOM a une propriété (nodeType) qui indique son type.
La valeur de cette propriété est soit (document.ELEMENT_NODE) pour un noeud "élément",
comme la balise head et document.TEXT_NODE pour un noeud textuel.
*/

if(document.body.nodeType === document.ELEMENT_NODE) { //la propriété document.ELEMENT_NODE est aussi égale à la constante 1 
	console.log("body est un noeud élément");
} else {
	console.log("body n'est pas une noeud élément");
}

if(document.head.nodeType !== document.TEXT_NODE) { //la propriété document.TEXT_NODE est aussi égale à la constante 3
	console.log("head est un noeud élément");
} else {
	console.log("head n'est pas un noeud élément");
}

//Les espaces et les retours à la ligne entre les balises correspondant à des nœuds textuels dans le DOM : #text "".

//La propriété childNodes est une sorte de tableau contenant tous les enfants d'un noeud.

//Accés au premier enfant du noeud body
console.log("Le premier enfant du noeud body : document.body.childNodes[0] = " , document.body.childNodes[0]);

//Accés au second enfant du noeud body
console.log("Le second enfant du noeud body : document.body.childNodes[1] = ", document.body.childNodes[1]);

for(i = 0; i < document.body.childNodes.length - 1 ; i++) {
	console.log("document.body.childNodes[" , i, "] = " ,document.body.childNodes[i]);
}

//La propriété parentNode affiche le noeud parent du noeud actuel
var h1 = b.childNodes[1]; //La variable h1 reçoit la balise <h1> comme un objet DOM.

console.log(h1.parentNode); //Affiche le noeud body qui est le noeud parent de h1

console.log(document.parentNode); //Affiche null : document n'a pas de parent, car il s'agit de l'élément racine.