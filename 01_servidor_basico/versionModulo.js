"use strict";

// Cargamos la librería
var fs = require("fs");

// Leer fichero de texto en utf-8 y sacar en consola 
// su contenido.
function versionModulo (modulo, callback){

	fs.readFile("node_modules/" + modulo + "/package.json", {encoding:"utf8"}, function(error, data){
		if(error){
			callback(error);
			return;
		}

		var pack = JSON.parse(data);
		var version = pack.version;
		callback(null, version);
	});
};


versionModulo("chance", function(err, str) {
	if (err) {
		 console.error('Hubo un error: ', err);
	 	return;
	}
	console.log('La version del módulo es:', str);
});