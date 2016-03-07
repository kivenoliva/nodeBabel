"use strict";

var async = require("async");

console.log("Empiezo");

var escribeTras2Segundos = function(texto,callbackNuestro){
	setTimeout(function(){
		console.log(texto);
		callbackNuestro();
	}, 1000);
};


async.eachSeries([1,2,3,4,5],
		function cada(item, siguiente){

			escribeTras2Segundos(item, function(){
				//var res = item % 2 ? null: "error";
				siguiente(/*res*/);
			});

		}, function fin(){
			console.log("FIN");
		}
);

//Para bucle asíncrono no se puede utilizar ni un for ni un while 
//Ni ningún bucle síncrono de los que conocemos.