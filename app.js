$(document).ready(function(event){
	
	alert('bonjour')
var recup = []

	$('#searchForm').submit(function(event){
		event.preventDefault();		
		var nom = $('#nom').val()
		var prenom = $('#prenom').val()
		var login = $('#login').val()
		var vill = $('#ville').val()
		var mail = $('#mail').val()
		var color = $('#color').val()
		var phone = $('#phone').val()
		var hobbys = $('#hobbys').val()

		var obj = {
			nom : nom,
			prenom : prenom,
			login : login,
			ville : ville,
			mail : mail,
			color : color,
			phono : phone,
			hobbys : hobbys
		}
		recup.push(obj);
		console.log(recup)
		localStorage.setItem('recup', JSON.stringify(recup));
		var recupls = localStorage.getItem('recup');
		var parseRecupls = JSON.parse(recupls); // ne pas metez mas de cotte aux variable
		for(var i = 0; i < parseRecupls.length; i++){
			console.log(parseRecupls[i]);
		}
	})
})
