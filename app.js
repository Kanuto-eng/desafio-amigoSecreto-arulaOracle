// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

// Implementa una función para agregar amigos: Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo() {
	// Obtenemos el valor del campo de texto
	let nombre = document.getElementById("amigo").value;
	// Validamos que el nombre no esté vacío
	if (nombre != "") {
		amigos.push(nombre); // Si el nombre no está vacío, agregamos el nombre a la lista de amigos
		alert('Amigo agregado correctamente'); //informamos que se agrego correctamente
	} else{
		alert('Por favor, inserte un nombre.'); // informamos al usuario que ingrese un nombre
	}
	// Limpiamos el campo de texto
	limpiarCaja();
	// Mostramos la lista de amigos en consola
	mostrarAmigos();
}

// Implementa una función para mostrar los amigos: Desarrolla una función, que permita al usuario mostrar la lista de amigos creada anteriormente en consola.
function mostrarAmigos() {
	// mostramos la lista de amigos en consola
	console.log(amigos);
	mostrarListaAmigos();
}

// Implementa una función para limpiar el campo de texto: Desarrolla una función, que permita al usuario limpiar el campo de texto y vaciar la lista de amigos.
function limpiarCaja(){
	document.querySelector('#amigo').value = '';
	return;
}

// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
function amigosDisponibles(){
	// Si la lista de amigos tiene algún elemento, mostramos un alert con un mensaje
	if(amigos.length > 0){
		alert(" hay amigos disponibles para hacer el sorteo.");
	} else{
		alert("No hay amigos disponibles para hacer el sorteo.");
	}
}

// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
function sortearAmigo() {
	// Validar que haya al menos dos amigos
	if (amigos.length < 2) {
		document.getElementById("disponibles").innerHTML = "Debe haber al menos 2 amigos.";
		return;
	}

	// asignar parejas
	let amigosDisponibles = [...amigos]; // Copia del array original
	let asignaciones = [];

	while (amigosDisponibles.length > 1) {
		// Elegir dos amigos al azar
		let indice1 = Math.floor(Math.random() * amigosDisponibles.length);
		let amigo1 = amigosDisponibles.splice(indice1, 1)[0];

		let indice2 = Math.floor(Math.random() * amigosDisponibles.length);
		let amigo2 = amigosDisponibles.splice(indice2, 1)[0];

		// Guardar la pareja
		asignaciones.push(`${amigo1} 💕 ${amigo2}`);
	}

	// Mostrar el resultado en la página
	document.getElementById("resultado").innerHTML = `<h3>Amigos Secretos:</h3> <p>${asignaciones.join("<br>")}</p>`;

	console.log("Asignaciones de amigo secreto:", asignaciones);

	document.querySelector('#disponibles').setAttribute('disabled', 'true');

	// Ocultar la lista de amigos en el HTML
	document.getElementById("listaAmigos").style.display = "none";
}

// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function mostrarListaAmigos() {
	// Obtener el elemento de la lista en el HTML
	let lista = document.getElementById("listaAmigos");

	// Limpiar la lista antes de agregar nuevos elementos
	lista.innerHTML = "";

	// Recorrer el array de amigos y agregar cada uno etiqueta <ul>
	for (let i = 0; i < amigos.length; i++) {
		let item = document.createElement("ul"); // Crear <ul>
		item.textContent = amigos[i]; // Agregar el nombre al <ul>
		lista.appendChild(item); // Agregar el <ul> a la lista
	}
}



