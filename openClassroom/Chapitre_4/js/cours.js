/*Les éléments du DOM disposent d'une propriété nommée "style" qui renvoie un objet reprèsentant
  l'attribut style de l'élément. Les propriétés de cet objet correspendent aux propriétés CSS de l'élément.
  En définissant leurs valeurs depuis JavaScript, on modifie le style de l'élément.
*/
var pElt = document.querySelector("p");
pElt.style.color="red";
pElt.style.margin = "50px";

/*Cetaines propriétés CSS s'écrivent sous la forme d'un nom composé. Pour utiliser ces propriétés en JS,
  il faut supprimer le tiret et écrire la première lettre du mot suivant en majuscule (cette convention de nommage s'appelle la norme camelCase).*/

pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "lightblue";	

/*On peut utiliser la propriété style pour recupérer les propriété CSS d'un élément.
  L'exemple suivant affiche la couleur du texte de chacun des trois paragraphes de notre page.
*/

var paraElts = document.querySelectorAll("p");
console.log(paraElts[0].style.color); //Affiche "red"
console.log(paraElts[1].style.color); //Affiche "green"
console.log(paraElts[2].style.color); //N'affiche rien
/*Il faut comprendre que la propriété style utilisée en JavaScript represente l'attribut style de l'élément.
  Elle ne permet pas d'accéder aux déclarations de style situées ailleurs, par exemple dans une feuille de style CSS externe,
  c'est le cas pour le troisiéme paragraphe dont le style est definit dans la feuille (cours.css).
*/

/*La bonne solution pour accéder au sytle d'un élément consiste à utiliser une fonction nommée getComputedStyle().
  Elle prend en paramétre un noeud du DOM et renvoie un objet représentant son style.
  On peut ensuite consulter les différentes propriétés CSS de cet objet.
*/

var StylePara3 = getComputedStyle(document.querySelector("#para"));
console.log(StylePara3.color);
console.log(StylePara3.fontFamily);