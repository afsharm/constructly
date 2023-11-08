const express = require('express');
const greetingRoutes = require('./routes/greetingRoutes');
const buildingItemRoutes = require('./routes/buildingItemRoutes');

const app = express();

app.use(express.json());
app.use('/greeting', greetingRoutes);
app.use('/buildingItems', buildingItemRoutes);

module.exports = app;