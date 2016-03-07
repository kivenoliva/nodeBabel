"use strict";

console.log("Empiezo");

var escribeTras2Segundos = function(texto,callback){
	setTimeout(function(){
		console.log(texto);
		callback();
	}, 1000);
};


function serie(arr, fn){

	if (arr.length == 0){
		console.log("FIN");
		return;
	}

	var firstElem = arr.shift();
	fn(firstElem, function(){

		serie(arr, fn);
		
	});

};

serie([1,2,3,4,5], escribeTras2Segundos);

//Para bucle asíncrono no se puede utilizar ni un for ni un while 
//Ni ningún bucle síncrono de los que conocemos.