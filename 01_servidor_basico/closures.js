"use strict";


var createAgente = function(edad){
	var edad = edad;
	return{
		dimeEdad: function(){
			return edad;
		}

	}
};

var agente = createAgente(30);//no usamos new porque lo estamos haciendo con closures
console.log(agente.dimeEdad());

var smith = createAgente(22);
console.log(smith.dimeEdad());




setTimeout(agente.dimeEdad, 2000);


