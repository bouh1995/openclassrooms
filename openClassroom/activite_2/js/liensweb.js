/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
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

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

/***************************** Ce qui suit est ce que j'ai réalisé pour l'activité *****************************/ 

var form = document.querySelector('form');
var boutton = document.querySelector('button');
var submit = document.getElementsByName('submit')[0];
             
//on cache le formulaire
form.style.display = "none";

boutton.addEventListener('click', function() {
    //Quand un utilisateur souhaite ajoutez un lien on cache le le boutton d'ajout et on affiche le formulaire
    this.style.display = "none";
    form.style.display = "block";
    //On donne "focus" au premier champs 
    document.querySelector('#nom').focus();
});

form.addEventListener('submit', function(Event) {
    //On récupére la valeurs des trois champs de formulaire
    var nom = document.querySelector('#nom').value;
    var titre = document.querySelector('#titre').value;
    var url = document.querySelector('#url').value;

    //On vérifie si l'utilisateur a saisi l'utilisateur a saisi "http://" ou "https://" sinon on rajoute nous meme "https://"
    if(!(/^http[s]:\/\/.*$/.test(url))) {
        url = "http://" + url;
    } 

    //On créé un nouvel objet avec les valeurs des trois champs de formulaire
    nouveauLien = { titre: titre, url: url, auteur: nom } 
    
    //On crée un nouvel élément avec les propriétés de l'objet et on l'ajoute à la page
    var elementLien = creerElementLien(nouveauLien);
    contenu.insertBefore(elementLien, document.querySelector('.lien'));

    //On vide le formulaire et on le cache puis on faire reaparaitre le boutton d'ajout 
    form.reset();
    form.style.display = "none";
    
    //On affiche le message puis 
    var message = document.createElement('div');
    var text = document.createElement('p');
    text.style.color = "#007acc";
    text.textContent = "Le lien \"" + titre + "\" a été ajouté !";
    message.appendChild(text);
    message.style.backgroundColor = "#b3ffe6";
    message.style.margin = "20px 0";
    message.style.height = "30px";
    message.style.padding = "15px";
    document.body.insertBefore(message, form);
    
    //on attend 2 secondes puis on éfface le méssage
    setTimeout(function() {
        document.body.removeChild(message);
    }, 2000);

    boutton.style.display = "block";

    //On empeche le d'envoyez les données
    Event.preventDefault();
});
