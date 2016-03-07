"use strict";

// Cargamos la librería
var fs = require("fs");

// Leer fichero de texto en utf-8 y sacar en consola 
// su contenido.

fs.readFile("./package.json", {encoding:"utf8"}, function(error, data){
	if(error){
		console.log("ERROR!", error);
		return;
	}

	var pack = JSON.parse(data);
	console.log(pack);
	console.log("FIN"); 
});