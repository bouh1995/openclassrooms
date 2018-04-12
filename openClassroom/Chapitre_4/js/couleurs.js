var couleurFond = prompt('Entrez la couleur du texte : ');
var fontFamily = prompt('Entrez la famille de la police : ');
var divElts = document.getElementsByTagName("div");

var divs = [divElts[0], divElts[1], divElts[2]];

divs.forEach(function(div) {
	div.style.color = couleurFond;
	div.style.fontFamily = fontFamily;;
});

console.log('Bisiha Wara Raha')