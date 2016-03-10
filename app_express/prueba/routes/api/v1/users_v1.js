"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = mongoose.model("User");

router.get('/', function(req, res) {

	var sort = req.query.sort || "name";

    User.list(sort, function(err, rows){
    	if (err){
    		res.json({result: false, err: err});
    		return;
    	}
    	res.json({result: true, rows: rows});
    });
});

//Añadir un user
router.post('/', function(req, res) {
	//Instanciamos objeto en memoria, SOLO en memoria
	var new_user = new User(req.body);
    
    //Lo guardamos en la base de datos
    new_user.save(function(err, newRow){
    	if(err){
    		res.json({result:false, err:err});
    		return;
    	}
    	res.json({result:true, row: newRow});
    });
});

//Actualizar un user
router.put('/:id', function(req, res) {
	
	//options = {multi: true}  ----> para cambiar varios a la vez

	///// MEJOR UTILIZAR UPDATE, ESTO ES MUCHO LIOOOOOOO //////////
	//Model.update(query, { $set: { name: 'jason borne' }}, options, callback)
	User.update({_id: req.params.id}, {$set: req.body}, {multi: true}, function(err, data){
		if(err){
    		res.json({result:false, err:err});
    		return;
		}
		res.json({result:true, row: data});
	});

});

module.exports = router;
