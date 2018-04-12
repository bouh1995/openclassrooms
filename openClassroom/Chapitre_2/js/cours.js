//console.log(document.body.childNodes[5].childNodes[1]); //Cette méthode marche mais elle est diffcile à lire.

/*var titreElts = document.getElementsByTagName("h2"); //La variable contiendra une collection de tous les titres h2.
console.log(titreElts[0]); //Affiche le prémier titre h2
console.log(titreElts.length); //Affiche la taille de la taille de variable titreElt (autrement dit le nombre de titre h2 dans notre page).
*/

//Tous les éléments appartenant à la classe "merveilles"
/*var merveillesElts = document.getElementsByClassName("merveilles");
for(i = 0; i < merveillesElts.length; i++) {
	console.log(merveillesElts[i]);
}*/

//L'élément portant l'identifiant "nouvelles"
//console.log(document.getElementById("nouvelles"));

//l'élément fils de l'élément ayant pour identifiant "antiques" et ayant la classe "existe", cette syntaxe est lourde et sujéte aux érreurs.
//console.log(document.getElementById("antiques").getElementsByClassName("existe"));

//Voici comment seléctionner les merveilles antiques existant à l'aide de la méthode querySelectorAll(), en utilisant un selécteur css.
//console.log(document.querySelector("#antiques > .existe"));
//console.log(document.querySelectorAll("#antiques > .existe")[0]); //Va mettre le ou les éléments seléctionnés dans un tableau.

//Le contenu HTML de l'élément identifié par "contenu"
//console.log(document.getElementById("contenu").innerHTML);

//Le contenu textuel de l'élément identifié par "contenu"
//console.log(document.getElementById("contenu").textContent);

/*La méthode getAttribute() peut etre appliquée à un élément du DOM,
  celle-ci renvoie la valeur de l'attribut passé en paramétre.*/
//Renvoie href du premier lien
//console.log(document.querySelector("a").getAttribute("href"));

//On peut aussi accéder directement aux attributs et meme les modifier. On sélectionne l'attribut "href" du premier lien et on le modifie.
//console.log(document.querySelector("a").href = "http://www.youtube.com");

//L'dentifiant de la premiére liste
//console.log(document.querySelector("ul").id);

//On peut vérifier la présence d'un attribut sur un élément grace à la méthode hasAttribute.
if(document.querySelector("a").hasAttribute("target")) {
	console.log("Le premier lien posséde l'attribut target")
} else {
	console.log("Le premier lien ne posséde pas l'attribut target");
}

//La propriété classList renvoie la liste des classes d'un élément du DOM, elle s'utilise comme un tableau.
var classes = document.getElementById("antiques").classList;
console.log(classes.length);// Affiche 1 : l'élément ne posséde qu'une seule classe.
console.log(classes[0]); // Affiche "merveilles"

//On peut aussi tester la présence d'une classe dans un élément en appelant la méthode contains sur la liste des classes.
if(document.getElementById("antiques").classList.contains("merveilles")) {
	console.log("L'élément identifié par antiques posséde la classe merveilles.")
} else {
	console.log("L'élément identifié par antiques ne posséde pas la classe merveilles.");
}