const express = require('express');
const greetingRoutes = require('./routes/greetingRoutes');

const app = express();

app.use(express.json());
app.use('/greeting', greetingRoutes);

module.exports = app;