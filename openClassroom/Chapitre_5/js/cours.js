/*function clic (){
	console.log("Clic !");
}

var bouttonElt = document.getElementById("boutton");
//Ajout d'un gestionnaire pour l'élément pour l'événement click
bouttonElt.addEventListener("click", clic);	
//Le gestionnaire prend en second paramétre un pointeur sur fonction de la fonction appéllée.
*/

/*Il est possible d'utiliser une syntaxe un peu plus concise en définissant la fonction appéllée au moment
  de l'appel à addEventListener. Le code ci-dessous est fonctionnelement identique au précédent.
*/

var bouttonElt = document.getElementById("boutton");
bouttonElt.addEventListener("click", function(Event) {
  console.log("Evénement : " + Event.type + ", texte de la cible : " + Event.target.textContent);
});

/*Dans ce cas, la fonction n'est plus identifiée par un nom et ne peut etre utilisée ailleurs dans le programme.
  Il s'agit d'une fonction anonyme, les fonctions anonymes sont fréquemment utilisées en JavaScript.
*/

/*Il peut arriver que l'on ne souhaite plus gérer un type d'événement sur un élément du DOM, dans ce cas
  on fait appel à la méthode removeEventListener sur cet élément, et en lui passant en paramétre le type d'événement,
  et la fonction qui gérait l'événement, mais il faut que cette derniére n'ait pas été definie de maniére anonyme !
 */

 //Suppression du gestionnaire pour l'événement click de l'élément bouttonElt
 //bouttonElt.removeEventListener("click", clic);

 /*Quel que soit le type d'événement, son déclenchement s'accompagne de la création d'un objet "Event" :
   qui peut etre utilisé par la fonction qui gére l'événement. Cette objet dispose de propriétés qui fournissent des
   informations sur l'événement, et des méthodes qui permettent d'agir sur cellui-ci.
   La  plupart des propriétés de l'objet Event, dependent du type d'événement déclenché.
   Parmi ces derniéres, quel que soit le type d'événement, Event posséde la propriété "type" qui renvoie le type d'événement 
   et "target" qui renvoie la cible de l'événement, c'est à dire l'élément du DOM auquel l'événement est déstiné.
   currentTarget renvoie quant à elle le conteneur de l'élément cible
 */

/*La solution la plus courante pour réagir à l'appui sur une touche du clavier consiste à gérer les événements 
  de type "keypress" déclenchés sur le corps de la page web (élément body du DOM, correspandant en JavaScipt à la variable
  document ou document.body). 
*/

//Gestion de l'appui sur une touche du clavier produisant un caractére
document.addEventListener('keypress', function(Event) {
  console.log('Vous avez appuyé sur la touche : ' + String.fromCharCode(Event.charCode));
});

//Affiche des informations sur un événement clavier
function infoClavier(Event) {
  console.log("Evénement clavier " + Event.type + ", touche : " + Event.keyCode);
  //Lors d'un appui prolongé sur une touche on constate que l'événement kepress et keydown sont déclenchés plusieurs fois
}

//Gestion de l'appui et du relachement d'une touche d clavier d'un touche du clavier
document.addEventListener("keydown", infoClavier);
document.addEventListener("keyup", infoClavier);
//On constate que l'ordre de declenchement des événements clavier est le suivant : keydown -> keypress -> keyup

function getBoutonSouris(code) {
  var boutton = "inconnu";
  switch(code) {
    case 0 : //code du boutton gauche
     boutton = "gauche"; break;
    case 1 : //code du boutton droit
     boutton = "millieu"; break;
    case 2 : //code du boutton du millieu
     boutton = "droit"; break;
  }
  return boutton;
}

function infoSouris(Event) {
  console.log("Evènement souris : " + Event.type + getBoutonSouris(Event.button) + ', X : ' + Event.clientX + ', Y : ' + Event.clientY);
}

document.addEventListener("click", infoSouris);
document.addEventListener("mouseup", infoSouris);
document.addEventListener("mousedown", infoSouris);
//On constate que l'ordre de declenchement des événements souris est le suivant : mousedown -> mouseup -> click

//Gestion de la fin du chargement de la page web !
window.addEventListener("load", function() {
  console.log("Page entièrement chargée");
});

window.addEventListener("beforeunload", function(Event) {
  var message = "On est bien ici !";
  Event.returnValue = message; //Provoque une demande de comfirmation (standard)
  return message; //Provoque  une demande de comfirmation (certains navigateurs)
  /*Firefox se comporte de manière spécifique sur ce point : il ne déclenche l'événement beforeunload
    que si l'utilisateur a interagi avec la page avant de la fermer.*/
});

//Gestion du clic sur le document 
document.addEventListener("click", function() {
  console.log("Gestionnaire document");
});

//Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function(Event) {
    console.log("Gestionnaire paragraphe");
    //Event.stopPropagation(); //On peut également arreter la propagation
});

//Gestion du clic sur le boutton
document.getElementById("propa").addEventListener("click", function(Event) {
  console.log("Gestionnaire boutton");
  //Event.stopPropagation(); //Arret de la propagation de l'événement
});

document.getElementById("interdit").addEventListener("click", function(Event) {
  console.log("Continuez plutot à lire le code !!!!!");
  //Event.preventDefault(); //Annulation de la navigation vers la cible du lien (ce qui est le comportement par défaut)
}); 