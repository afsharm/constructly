const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BuildingItem = sequelize.define('BuildingItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = BuildingItem;