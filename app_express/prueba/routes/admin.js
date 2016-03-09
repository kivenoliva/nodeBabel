"use strict";

var express = require('express');
var router = express.Router();


router.get("/", function(req, res, next){
	console.log(req.params);
	res.send("Hola express");
});

router.get("/:id([0-9]+)", function(req, res, next){
	console.log("id: ", req.params, req.params.id);
	res.send("Hola express ID");
});

router.get("/:id", function(req, res, next){
	console.log(req.params);
	res.send("Hola express");
});

router.post("/", function(req, res){
	console.log(req.body);
	res.send("body recogido");
});



module.exports = router;



