'use strict';

// Vehicle model required
const vehicleModel = require('../models/vehicle');

class vehicleController {
  /**
   * Create a new vehicle
   *
   * @param req
   * @param res
   */
  static createVehicle(req, res) {
    let vehicle = vehicleModel.wrap(req.body);

    res.send(`${vehicle.toJson}`);
  }

  /**
   * Get vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static getVehicle(req, res) {
    // Instantiate new model and populate
    let vehicle = vehicleModel.wrap({
      'mileage': '12224 km',
      'colour': 'Red',
      'transmission': 'Automatic',
      'driveTrain': '4x2',
      'engineCapacity': '3.0L',
      'engineFuelType': 'Petrol'
    });

    res.send(`${vehicle.toJson}`);
  }

  /**
   * Update vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static updateVehicle(req, res) {
    let vehicle = vehicleModel.wrap(req.body);

    res.send(`${vehicle.toJson}`);
  }

  /**
   * Delete vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static deleteVehicle(req, res) {
    let vehicle = vehicleModel.wrap(req.body);

    res.send(`${vehicle.toJson}`);
  }
}

// Export
module.exports = vehicleController;