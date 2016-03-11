"use strict";

var sleep = function(ms){

	var promesa = new Promise(function(resolve, reject){
		setTimeout(function(){

			if (ms % 2 !== 0){
				reject(new Error("ERROOOOOOOR!!!!!!!"));
				return;
			}
			resolve("ACIERTOOOOOOO!!!!!!!!");
			return;
		}, ms);

	});

	return promesa;
};

var promesa = sleep(2001);

console.log(promesa);

promesa.then(function(data){
	console.log("promesa terminada", data);
}).catch( function(error) {
	console.log("Ha fallado", error);
});