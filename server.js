'use strict';
require('dotenv').load();

// Express
const express = require('express');
const app = express();

// Configs, Routes
const config = require('./config');
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/vehicles', routes);

app.use((err, req, res, next) => {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }

  next();
});

app.listen(config.PORT, config.HOST);
console.log(`${config.APP_NAME} running on http://${config.HOST}:${config.PORT}`);
