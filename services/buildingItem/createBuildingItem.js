const BuildingItem = require('../../models/buildingItem');
const CreateBuildingItemDTO = require('../../commands/CreateBuildingItemDTO');

module.exports = async (buildingItemData) => {
    try {
        const { name } = new CreateBuildingItemDTO(buildingItemData.name);
        const buildingItem = await BuildingItem.create({ name });
        return buildingItem;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create the building item');
    }
}