//Ajout d'un élément liste pour cela on utilise l'opérateur += et la propriété innerHTML
document.getElementById("langages").innerHTML += "<li id='c'>C</li>";

//Suppression de la liste des langages
//document.getElementById("contenu").innerHTML = "";

//Ajout d'un contenu textuel à un élément du dom grace à la propriété textContent
document.querySelector("h1").textContent += " de programmation";

//Definition d'un attribut id à l'élément h1 grace à la méthode setAttribute(nomAtt, valeur)
document.querySelector("h1").setAttribute("id", "titre");

//Certains attributs sont directement accesible sous la forme de propriétés.
document.querySelector("h1").id = "titre";

/*Pour ajouter, supprimer ou renommer des classes d'un élément du dom,
  on utilise l'attribut classList, et en employant les méthodes add et remove*/

document.querySelector("h1").className = "debuts"; //Ces deux lignes de code font la meme chose : définir un classe "debuts" à l'élément séléctionné.
document.querySelector("h1").setAttribute("class", "debuts");

document.querySelector("h1").classList.remove("debuts"); //Suppression de la classe "debut".
document.querySelector("h1").classList.add("titre");     //Ajout de la classe "titre".

var listeLangages = document.getElementById("langages");

var pythonElt = document.createElement("li"); //Création d'un élément li
pythonElt.id = "python";                      //Défintion de son identifiant
pythonElt.textContent = "Python";             //Défintion de son contenu textuel
listeLangages.appendChild(pythonElt); //Insértion d'un nouvel élément à la fin de la liste

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby")); //Autre méthode pour définir le contenu textuel d'un élément.
listeLangages.appendChild(rubyElt);					  //Le nouvel élément contient un noeud fils de type texte.

var perlElt = document.createElement("li");
perlElt.id="perl";
perlElt.textContent="Perl";
listeLangages.insertBefore(perlElt, document.getElementById("php"));//Insére l'élément perl avant l'élément php

listeLangages.insertAdjacentHTML("afterbegin", "<li id='javascript'>Javascript</li>"); //(beforebegin, afterbegin, beforeend afterend).
listeLangages.insertAdjacentHTML("beforeend", "<li id='cobol'>Cobol</li>");

var bashElt = document.createElement("li");
bashElt.id="bash";
bashElt.appendChild(document.createTextNode("Bash"));
//Remplacement de l'élément identifié par "perl" par le nouvel élément
listeLangages.replaceChild(bashElt, document.getElementById("perl"));

//Enfin il est possible de supprimer un noeud à l'aide de la méthode removeChild, prenant en paramétre le noeud à supprimer
listeLangages.removeChild(document.getElementById("bash"));

//Exercice 1
var para = document.createElement('p');
var lien = document.createElement('a');
lien.setAttribute('target', '_target');
lien.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lien.textContent = "lien";
para.appendChild(document.createTextNode("En voici une "));
para.appendChild(lien);
para.appendChild(document.createTextNode(" plus complete."));
document.body.appendChild(para);