
function colorier(couleur) {
	var divs = document.getElementsByTagName("div"); 

	for(i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = couleur;
	}
}

document.addEventListener("keypress", function(Event) {
	
	var car = String.fromCharCode(Event.charCode);
	var car = car.toLowerCase(); //Pour gérer indiféremment minuscules et majuscules
	var couleur = "white";
	switch(car) {
		case "r" : couleur = "red"; break;
		case "b" : couleur = "blue"; break;
		case "v" : couleur ="green"; break;
		case "j" : couleur ="yellow"; break;
		default : console.log("touche " + car + " non gérée.");
	}
	 colorier(couleur);
});

/*document.addEventListener("keypress", function(Event) {
	var car = String.fromCharCode(Event.charCode); //Récuperation de la touche préssée

	if(car == "r" || car == "R") {
		colorier("red");
	} else if(car == "v" || car == "V") {
		colorier("green");
	} else if(car == "j" || car == "J") {
		colorier("yellow");
	} else if(car == "b" || car == "B") {
		colorier("blue");
	} else {
		colorier("white");
	}
});*/
