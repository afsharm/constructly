const BuildingItem = require('../../models/buildingItem');

module.exports = async (buildingItem) => {
    try {
        const item = await BuildingItem.create(buildingItem);
        return item;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create the building item');
    }
}