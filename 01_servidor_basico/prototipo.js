"use strict";

// Hacer función constructora 
var Persona = function(name){
	this.name = name;
};

// Crear una instancia
var luis = new Persona("Luis");

console.log(luis.name);

// Cambiar su protptipo
Persona.prototype.saluda = function(){
	 console.log("Hola, soy " + this.name);
};

luis.saluda();


//--------------------------- HERENCIA---------------------------//

// Otra función constructora que hereda de persona
var Agente = function(name){
	//llamar a super() en otros lenguajes para que use el constructor del padre
	Persona.call(this, name);	
};

Agente.prototype = new Persona("Soy un prototipo");// se hace un new Persona aqui unicamente para tener una persona 
//que es el padre de todos los agentes, para que ahora todos los agentes que creas, apunten a personas. Ese new Persona
//que tiene de nombre "Soy un prototipo", no lo utilizamos, es para eso que hemos dicho.

//si no queremos usar new, utilizamos closures
var smith = new Agente("Smith");

smith.saluda();