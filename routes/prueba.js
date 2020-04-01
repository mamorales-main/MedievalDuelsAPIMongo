'use strict'

const express = require('express');
const router = express.Router();
const PruebaController = require('../controllers/prueba');

router.get('/test/prueba', PruebaController.test)

module.exports = router;