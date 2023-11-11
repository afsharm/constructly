const createBuildingItem = require('../../services/buildingItem/createBuildingItem');

module.exports = async (req, res) => {
    try {
        const buildingItem = await createBuildingItem(req.body);
        res.status(201).json(buildingItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
