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
		const { nickname, email, password } = req.query;
		const users = await userService.getAllUsers({
			nickname,
			email,
			password,
		});

		res.json(users);
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

async function createFavorites(req, res) {
	try {
		const userId = req.params.id;
		const { toiletsId } = req.body;
		console.log(toiletsId);
		const favorite = await userService.createFavorite({
			userId,
			toiletsId,
		});
		res.json(favorite);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

async function createNotice(req, res) {
	try {
		const notice = await userService.createNotice(req.body);
		res.json(notice);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

module.exports = {
	getUsersById,
	getAllUsers,
	createUser,
	createFavorites,
	createNotice,
};
