const toiletService = require("../services/toiletModel")

async function createToilet(req, res) {
    try {
        const toilet = await toiletService.createToilet(req.body);
        res.json(toilet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getToiletById(req, res) {
    try {
        const id = req.params.id;

        const player = await toiletService.getToiletById(id);
        if (player) {
            res.json(player);
        } else {
            res.json({ error: `Player not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

async function getAllToilets(req, res) {
    try {
        const { type, adress, borough, hours, disableAcs, babyAccess, geoPointLon, geoPointLat } = req.query;
        const toilets = await toiletService.getAllToilets({ type, adress, borough, hours, disableAcs, babyAccess, geoPointLon, geoPointLat })
        res.json(toilets)
    }

    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { createToilet, getToiletById, getAllToilets }