const express = require('express');
const createBuildingItem = require('../controllers/buildingItem/createBuildingItem');
const getAllBuildingItems = require('../controllers/buildingItem/getAllBuildingItems');

const router = express.Router();
router.post('/', createBuildingItem);
router.get('/', getAllBuildingItems);

module.exports = router;