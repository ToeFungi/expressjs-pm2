'use strict';

const express = require('express');
const router = express.Router();

const boilerController = require('../controller/boilerController');

router.get('/:id', (req, res) => boilerController.getVehicle(req, res));

module.exports = router;