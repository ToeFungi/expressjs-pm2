'use strict';

// Default / env configuration
const config = {
  APP_NAME: process.env.APP_NAME || 'ExpressJS',
  APP_ENV: process.env.APP_ENV || 'dev',
  HOST: '0.0.0.0',
  PORT: 8080
};

// Export
module.exports = config;