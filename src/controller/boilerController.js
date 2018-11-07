'use strict';
const vehicleModel = require('../models/vehicle');

class boilerController {
  static getVehicle(req, res) {

    let vehicle = vehicleModel.wrap({
      'milage': 114456
    });

    res.send(`${req.params.id}, ${vehicle.milage}`);
  }
}

module.exports = boilerController;