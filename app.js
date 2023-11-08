const express = require('express');
const sequelize = require('./config/database');
const greetingRoutes = require('./routes/greetingRoutes');
const buildingItemRoutes = require('./routes/buildingItemRoutes');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(express.json());
app.use('/greeting', greetingRoutes);
app.use('/buildingItems', buildingItemRoutes);

module.exports = app;