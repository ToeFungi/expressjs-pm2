'use strict';

// Express setup
const express = require('express');
const router = express.Router();

// Validation library
const expressJoi = require('express-joi-validator');

// Validation schemas
const vehicleSchema = require('./validation/vehicle');

// Vehicle controller instantiation
const vehicleController = require('../controller/vehicleController');

// Vehicle endpoints
router.get('/:id', expressJoi(vehicleSchema.get), (req, res) => vehicleController.getVehicle(req, res));
router.post('/', expressJoi(vehicleSchema.post), (req, res) => vehicleController.createVehicle(req, res));
router.put('/:id', expressJoi(vehicleSchema.put), (req, res) => vehicleController.updateVehicle(req, res));
router.delete('/:id', expressJoi(vehicleSchema.delete), (req, res) => vehicleController.deleteVehicle(req, res));

// Export
module.exports = router;