const BuildingItem = require('../../models/buildingItem');

module.exports = async () => {
    try {
        const buildingItems = await BuildingItem.findAll();
        return buildingItems;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch building items');
    }
}