var styleElt = getComputedStyle(document.querySelector('#contenu'));
var infos = document.querySelector('#infos');
var titre = document.createElement('p');
titre.appendChild(document.createTextNode("Informations sur l'élément : "));
infos.appendChild(titre);
var liste = document.createElement('ul');
var hauteur = document.createElement('li');
var largeur = document.createElement('li');	
hauteur.textContent = "Hauteur : " + styleElt.height;
largeur.textContent = "Largeur : " + styleElt.width;
liste.appendChild(hauteur);
liste.appendChild(largeur);
infos.appendChild(liste);