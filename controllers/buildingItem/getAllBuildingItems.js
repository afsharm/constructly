const getAllBuildingItems = require('../../services/buildingItem/getAllBuildingItems');

module.exports = async (req, res, next) => {
    try {
        const buildingItems = await getAllBuildingItems();

        res.json(buildingItems);
    } catch (error) {
        next(error);
    }
}
