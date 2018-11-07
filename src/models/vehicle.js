class Vehicle {
  constructor(vehicle) {
    this.vehicle = vehicle;
  }

  /**
   * @param vehicle
   * @returns {Vehicle}
   */
  static wrap(vehicle) {
    return new Vehicle(vehicle);
  }

  /**
   * @returns {string}
   */
  get colour() {
    return this.vehicle.colour;
  }

  /**
   * @returns {int}
   */
  get mileage() {
    return this.vehicle.mileage;
  }

  /**
   * @returns {string}
   */
  get transmission() {
    return this.vehicle.transmission;
  }

  /**
   * @returns {string}
   */
  get driveTrain() {
    return this.vehicle.driveTrain;
  }

  /**
   * @returns {string}
   */
  get engineCapacity() {
    return this.vehicle.engineCapacity;
  }

  /**
   * @returns {string}
   */
  get engineFuelType() {
    return this.vehicle.engineFuelType;
  }
}

module.exports = Vehicle;