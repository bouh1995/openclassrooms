// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var paysElt = document.getElementById('pays');
var suggestions = document.getElementById('suggestions');

//On récupére que l'utilisateur a saisi à chaque frappe.
paysElt.addEventListener('input', function(Event) {
    //On contruit l'éxpression réguliére qui correspond avec la nouvelle saisie de l'utilisateur
    var entree = this.value; 
    var motif = "^" + entree + ".*$";
    var regex = new RegExp(motif);

    //On vide les suggestions
    suggestions.innerHTML = "";

    //On parcourt le tableau à la recherche de pays correspondant à notre expression réguliére
    listePays.forEach(function(pays) {
        if(regex.test(pays) && entree !== "") {
            var suggestion = document.createElement('div');
            suggestion.className = "suggestions";
            suggestion.textContent = pays;
            suggestion.addEventListener('click', function(Event) {
                paysElt.value = this.textContent;
                suggestions.innerHTML = "";
            });
            suggestions.appendChild(suggestion);
        }
    });
    //console.log(motif);
});