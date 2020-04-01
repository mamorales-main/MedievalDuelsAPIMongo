'use strict'

// carga librerias

const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
// Ejecución del servidor de express

const app = express();

// exportado del modulo

// declaración constantes

//ejecución servidor

//rutas

const commentary_routes = require('./routes/prueba');
app.use('/mongo', commentary_routes);

// middlewares

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

module.exports = app;