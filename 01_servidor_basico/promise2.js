"use strict";

function conArroz(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + " arroz");
	});
};

function conAjo(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + ", ajo");
	});
};

function conSal(plato){
	return new Promise(function(resolve, reject){
		resolve(plato + ", sal");
	});
};

function con(plato, ing){
	return new Promise(function(resolve, reject){
		resolve(plato + ", " + ing);
	});
};

var paella = "Paella con:";

conArroz(paella)
	.then(conAjo)	//ejecutas conAjo pasandole lo que devuelve conArroz un poco raro porque no hay () pero lo ejecuta y devuelve una promesa
	.then(conSal)
	.then(function(plato){
		console.log("plato", plato);
	})
	.catch(function(error){
		console.log(error);
	});