/* 
Activité 1
*/

// Liste des liens Web à afficher (sous la forme d'un tableau d'objets). Un lien (objet de type lien) est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

listeLiens.forEach(function(listeLien) {
    var contenu = document.getElementById('contenu');
    var conteneur = document.createElement('p');
    var lien = document.createElement('a');
    var url = document.createElement('span');
    var auteur = document.createElement('span');

    lien.href = listeLien.url;
    lien.textContent = listeLien.titre;
    lien.className = 'lien';
    
    lien.style.color = "#428bca";
    lien.style.textDecoration = "none";
    lien.style.fontWeight = "bold";
    
    conteneur.style.backgroundColor = "white";
    conteneur.style.height = "50px";
    conteneur.style.margin = "30px";
    conteneur.style.padding = "10px";

    auteur.textContent = "Ajouté par " + listeLien.auteur;
    auteur.style.padding = "10px";
    url.textContent = listeLien.url; 


    conteneur.appendChild(lien);
    conteneur.appendChild(url);
    conteneur.appendChild(document.createElement('br')); //Retour à la ligne
    conteneur.appendChild(auteur);
    contenu.appendChild(conteneur);
});

// TODO : compléter ce fichier pour ajouter les liens à la page web