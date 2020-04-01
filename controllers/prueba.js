'use strict'

var controller = {

    test: function(req, res) {
        console.clear();
        console.log('Se ha realizado una petición al metodo prueba');
        return res.status(200).send({
            message: 'Este método funciona bien'
        })
    }

}

module.exports = controller;