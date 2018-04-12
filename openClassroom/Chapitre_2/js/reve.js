
function compterElements(selecteur) {
	return document.querySelectorAll(selecteur).length;
}

console.log(compterElements("p"));
console.log(compterElements(".adjectif"));
console.log(compterElements("p .adjectif")); //Désendant
console.log(compterElements("p > .adjectif")) ////Enfant direct