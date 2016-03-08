"use strict";

// Hacer un objeto con métodos
var persona = {
	name: "Luis",
	printName: function(){
		console.log(this.name);
	}
};

var mascota = {
	name: "Toby"
};

persona.printName();
// Llamarlo sin this
setTimeout(persona.printName.bind(persona), 3000);

function saluda(func){
	func();
}

saluda(persona.printName.bind(mascota));