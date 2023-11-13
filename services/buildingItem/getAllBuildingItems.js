const BuildingItem = require('../../models/buildingItem');
const BuildingItemDTO = require('../../queries/BuildingItemDTO');


module.exports = async () => {
    try {
        const buildingItems = await BuildingItem.findAll();
        const buildingItemsDTO = buildingItems.map(({ id, name }) =>
            new BuildingItemDTO(id, name)
        );

        return buildingItemsDTO;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch building items');
    }
}