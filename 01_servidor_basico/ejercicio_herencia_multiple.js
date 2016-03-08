"use strict";

var extend = require('util')._extend;
var EventEmitter = require("events").EventEmitter;

var eventEmitter = new EventEmitter();

eventEmitter.on("llamada de teléfono", function(){
	console.log("ring ring");
});

eventEmitter.on("llamada de teléfono", function(){
	console.log("brr brr");
});

eventEmitter.emit("llamada de teléfono");


// Hacer función constructora 
var Persona = function(name){
	this.name = name;
};

// Crear una instancia
var luis = new Persona("Luis");
Persona.prototype = extend(Persona.prototype, EventEmitter.prototype);


luis.on("llamada de teléfono", function(){
	console.log("ring ring LUIS");
});

luis.on("llamada de teléfono", function(){
	console.log("brr brr LUIS");
});

luis.emit("llamada de teléfono");