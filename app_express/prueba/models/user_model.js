"use strict";

//var mongo = require('../lib/connectMongo');
var conn = require('../lib/connectMongoose');
var mongoose = require('mongoose');



//Creo el esquema
var userEsquema = mongoose.Schema({
	name: String,
	age: Number
});

userEsquema.statics.list = function(sort, callback){
	// Preparamos la query sin ejecutarla.
	var query = User.find({});

	// añadimos más parámetros a la query
	query.sort(sort);

	//la ejecutamos
	query.exec(function(err, rows){
		if (err){
			callback(err);
			return;
		}
		console.log(rows);
		callback(null, rows);
		return;
	});
};

//Lo registro en mongoose
var User = mongoose.model("User", userEsquema); //(Nombre como quiero que se llame el modelo, le paso el modelo)


/*
var user = {
	getUsers: function(callback){
		//imaginamos que leemos de un fichero y esto es asíncrono
		/*
		mongo.db.collection('agentes').find({}).toArray(function(err, docs) {
 			if (err) {
 				callback(err);
 				return;
 			}
			//devuelvo users
			callback(null, docs);
 			return;
		});
		*/

		/*
		//Recuperar con mongoose
		var User = mongoose.model("User");
		console.log(User);
		User.find({}, function(err, datos){
			if(err){
				callback(err);
				return;
			}
			callback(null, datos);
			return;
		});
	}
};
*/

//module.exports = User;