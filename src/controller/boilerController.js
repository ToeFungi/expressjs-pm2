'use strict';
const vehicleModel = require('../models/vehicle');

class boilerController {
  static getVehicle(req, res) {

    // Instantiate new model and populate
    let vehicle = vehicleModel.wrap({
      'mileage': 114456
    });

    res.send(`Vehicle ${req.params.id}'s mileage is ${vehicle.mileage} km`);
  }
}

module.exports = boilerController;