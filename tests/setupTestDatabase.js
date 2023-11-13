const sequelize = require('../config/database');

async function setupTestDatabase() {
  try {
    // Create the database if it doesn't exist
    await sequelize.query('CREATE DATABASE IF NOT EXISTS constructly_test;');
    
    // Use the test database
    await sequelize.query('USE constructly_test;');
    
    // Create the tables if they don't exist
    await sequelize.sync({ force: true }); // This will drop all existing tables and create new ones
    
    console.log('Test database and tables created successfully.');
  } catch (error) {
    console.error('Error setting up test database:', error);
  }
}

module.exports = { setupTestDatabase };