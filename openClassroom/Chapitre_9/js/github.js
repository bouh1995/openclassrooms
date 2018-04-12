var profilElt = document.querySelector('#profil');
var avatarElt = document.querySelector('#avatar');
var buttonElt = document.querySelector('#button');

buttonElt.addEventListener('click', function(event) {
		event.preventDefault();
		var lien = "https://api.github.com/users/" + avatarElt.value;
		ajaxGet(lien, afficherProfil);
});

function afficherProfil(reponse) {
	
	profilElt.innerHTML = "";

	var profil = JSON.parse(reponse);
	var nomComplet = profil.name;
	var photo = profil.avatar_url;
	var siteWeb = profil.blog;
	var employeur = profil.company;

	var photoElt = document.createElement('img');
	photoElt.src = photo;
	photoElt.style.height = "150px";
	photoElt.style.width = "150px";

	var nomElt = document.createElement('div');
	nomElt.textContent = nomComplet;
	nomElt.style.fontSize = "20px";

	var employeurElt = document.createElement('div');
	employeurElt.textContent = employeur;

	var siteElt = document.createElement('a');
	siteElt.textContent = profil.blog;
	siteElt.href = profil.blog;

	profilElt.appendChild(photoElt);
	profilElt.appendChild(nomElt);
	profilElt.appendChild(employeurElt);
	profilElt.appendChild(siteElt);
}
