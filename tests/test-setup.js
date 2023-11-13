const { setupTestDatabase } = require('./setupTestDatabase');

beforeAll(async () => {
  // Setup the test database before running any tests
  await setupTestDatabase();
});