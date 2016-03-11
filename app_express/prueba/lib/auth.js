"use strict";
var basicAuth = require("basic-auth")


var fn = function(user_enter, pass){

    return  function(req, res, next){
                console.log("pasa");
                //Aquui controlo la autentificación
                var user = basicAuth(req); //Esto es lo que me hace el módulo, sacar el usuario y dármelo
                if (!user || user.name !== user_enter || user.pass !== pass){
                    console.log(user);
                    res.set("WWW-Authenticate", "Basic realm=Authorization Required"); //---> Escribe en la cabecera.
                    res.send(401);
                    return;
                };

                next();
            };

};





module.exports = fn;