var express = require('express');
var router = express.Router();
var user = require("../models/user_model.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {

  //pido datos al modelo
  user.getUsers(function(err, user){
  	//cuando estén disponibles los mando a la vista
  	res.render('user_form', {users: user});
  });	
  
});

module.exports = router;
