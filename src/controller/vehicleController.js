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
    res.send('Create Not Implemented');
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
      'mileage': 114456
    });

    res.send(`Vehicle ${req.params.id}'s mileage is ${vehicle.mileage} km`);
  }

  /**
   * Update vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static updateVehicle(req, res) {
    res.send('Update Not Implemented');
  }

  /**
   * Delete vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static deleteVehicle(req, res) {
    res.send('Delete Not Implemented');
  }
}

// Export
module.exports = vehicleController;