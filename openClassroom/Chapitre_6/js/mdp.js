var form = document.querySelector('form');
var infoMdp = document.getElementById('infoMdp');

form.addEventListener('submit', function(Event) {
	var mdp1 = document.getElementById('mdp1').value;
	var mdp2 = document.getElementById('mdp2').value;
		
	if(mdp2 === mdp1) {
		if(mdp1.length >= 6) {
			var regexNum = /\d+/;
			if(regexNum.test(mdp1)) {
				message = "Mots de passe OK";
			} else {
				message = "Erreur : le mot de passe ne contient aucun chiffre";		
			}
		} else {
			message = "Erreur : la longueur minimale du mot de passe est de 6 caractères";	
		}
	} else {
		 message = "Erreur : les mots de passe saisis sont différents";
	}
	infoMdp.textContent = message;
	Event.preventDefault();
});