// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

var contenu = document.getElementById("contenu");

for(i = 0; i < journaux.length; i++) {
	var lien = document.createElement("a");
	lien.textContent = journaux[i];
	lien.href = journaux[i];
	lien.setAttribute("target", "_blank");
	contenu.appendChild(lien);
	contenu.appendChild(document.createElement("br"));
}