"use strict";

//node va a ir a buscar a la api de node, si no esta ahí, va a los módules globales, y si no están ahi
//nos diría que no existe, para decirle que es uno que he hecho yo, le metemos la ruta
var modulo = require('./modulo');
console.log(modulo);

modulo.objeto2.nada();
modulo.objeto.vuela();