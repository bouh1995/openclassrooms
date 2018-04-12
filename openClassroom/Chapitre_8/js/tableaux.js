function handler(reponse) {
	var musee = document.querySelector('table');

	var tableaux = JSON.parse(reponse);

	tableaux.forEach(function(tableau) {
		var ligneTr = document.createElement('tr');

		ligneTr.innerHTML = "<td>" + tableau.nom + "</td>" +"<td>" + tableau.annee + "</td>" + "<td>" + tableau.peintre + "</td>";

		musee.appendChild(ligneTr);
	});
}

ajaxGet('http://localhost/javascript-web-srv/data/tableaux.json', handler);