//const { log } = require("three/examples/jsm/nodes/Nodes.js");
const userService = require("../services/userService");

async function getUsersById(req, res) {
    try {
        const id = req.params.id;

        const user = await userService.getUsersById(id);
        if (user) {
            res.json(user);
        } else {
            res.json({ error: `User not found (id: ${id})` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getAllUsers(req, res) {
	try {
	
        const { identity, alias } = req.query;
        const users = await userService.getAllUsers({ identity, alias });
        res.json(users);
        console.log();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getUsersById,
    getAllUsers,
    createUser,
};
