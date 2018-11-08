'use strict';

const Joi = require('joi');

module.exports.get = {
  params: {
    id: Joi.number().integer().min(1).required()
  }
};

module.exports.post = {
  body: {
    make: Joi.string().min(3).required(),
    model: Joi.string().min(2).max(16).required(),
    variant: Joi.string().min(2).max(16).required(),
    mileage: Joi.number().integer().min(0).required(),
    colour: Joi.string().required(),
    transmission: Joi.string().valid('Automatic', 'Manual').required(),
    driveTrain: Joi.string().valid('4x4', '4x2').required(),
    engineCapacity: Joi.number().min(0).max(12).required(),
    engineFuelType: Joi.string().valid('Petrol', 'Diesel', 'Electric').required()
  }
};

module.exports.put = {
  params: {
    id: Joi.number().integer().min(1).required()
  },
  body: {
    make: Joi.string().min(3),
    model: Joi.string().min(2).max(16),
    variant: Joi.string().min(2).max(16),
    mileage: Joi.number().integer().min(0),
    colour: Joi.string(),
    transmission: Joi.string().valid('Automatic', 'Manual'),
    driveTrain: Joi.string().valid('4x4', '4x2'),
    engineCapacity: Joi.number().integer().min(0).max(12),
    engineFuelType: Joi.string().valid('Petrol', 'Diesel', 'Electric')
  }
};

module.exports.delete = {
  params: {
    id: Joi.number().integer().min(1).required()
  }
};
