var form = document.querySelector("form");
var message2 = document.querySelector("#message2");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	var temoignage = {
		pseudo: event.target.elements.pseudo.value,
		evaluation: event.target.elements.evaluation.value,
		message: event.target.elements.message.value
	}

	ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function() {
		console.log(reponse);
		message2.textContent = "Le temoignage a bien été ajouté.";
		setTimeout(function() {
			message2.textContent = "";
		}, 3000);
		form.reset();
	}, true);
});