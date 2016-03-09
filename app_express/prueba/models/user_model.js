"use strict";

var users = [	
	{name: "Kevin", age: "24"},
	{name: "Araujo", age: "23"}
];

var user = {
	getUsers: function(callback){
		//imaginamos que leemos de un fichero y esto es asíncrono
		var usuariosLeidos = users;
		
		//devuelvo users
		callback(null, users);
	}
};

module.exports = user;