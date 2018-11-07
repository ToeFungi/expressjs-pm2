'use strict';

const config = {
  APP_NAME: process.env.APP_NAME || 'ExpressJS',
  APP_ENV: process.env.APP_ENV || 'dev',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 8080
};

module.exports = config;