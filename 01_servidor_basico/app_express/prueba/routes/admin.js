"use strict";

var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
	res.send("Hola express");
});

module.exports = router;