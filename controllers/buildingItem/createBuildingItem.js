const BuildingItem = require('../../models/buildingItem');    

module.exports = async (req, res) => {
    try {
        const buildingItem = await BuildingItem.create(req.body);
        res.status(201).json(buildingItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
