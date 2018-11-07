'use strict';
require('dotenv').load();

// Express
const express = require('express');
const app = express();

// Configs, Routes
const config = require('./config');
const routes = require('./src/routes/routes');

app.use('/vehicles', routes);

app.listen(config.PORT, config.HOST);
console.log(`${config.APP_NAME} running on http://${config.HOST}:${config.PORT}`);
