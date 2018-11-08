'use strict';

// Vehicle model required
const vehicleModel = require('../models/vehicle');
const httpStatus = require('../library/HttpStatus');

class vehicleController {
  /**
   * Create a new vehicle
   *
   * @param req
   * @param res
   */
  static createVehicle(req, res) {
    res.status(httpStatus.OK);
    res.send();
  }

  /**
   * Get vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static getVehicle(req, res) {
    res.status(httpStatus.OK);
    res.send();
  }

  /**
   * Update vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static updateVehicle(req, res) {
    res.status(httpStatus.OK);
    res.send();
  }

  /**
   * Delete vehicle with specified ID
   *
   * @param req
   * @param res
   */
  static deleteVehicle(req, res) {
    res.status(httpStatus.OK);
    res.send();
  }
}

// Export
module.exports = vehicleController;