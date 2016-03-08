"use strict";

var eventEmitter = new (require("events")).EventEmitter();

eventEmitter.on("llamada de teléfono", function(){
	console.log("ring ring");
});

eventEmitter.on("llamada de teléfono", function(){
	console.log("brr brr");
});

eventEmitter.emit("llamada de teléfono");