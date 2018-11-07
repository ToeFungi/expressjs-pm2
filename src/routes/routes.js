'use strict';

// Express setup
const express = require('express');
const router = express.Router();

// Vehicle controller instantiation
const vehicleController = require('../controller/vehicleController');

// Vehicle endpoints
router.get('/:id', (req, res) => vehicleController.getVehicle(req, res));
router.post('/', (req, res) => vehicleController.createVehicle(req, res));
router.put('/:id', (req, res) => vehicleController.updateVehicle(req, res));
router.delete('/:id', (req, res) => vehicleController.deleteVehicle(req, res));

// Export
module.exports = router;