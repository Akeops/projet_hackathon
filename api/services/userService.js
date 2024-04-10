const { User } = require("../models/associations");

// CRUD

async function createUser(user) {
	return await User.create(user);
}

//Méthode
async function getUsersById(id) {
	return await User.findByPk(id);
}

async function getAllUsers(criterias = {}) {
	const where = {};
	// where.alias !== undefined && (where.alias = criterias.alias);
	if (criterias.nickname) {
		where.nickname = criterias.nickname;
	}
	if (criterias.email) {
		where.email = criterias.email;
	}
	if (criterias.password) {
		where.password = criterias.password;
	}
	return await User.findAll({ where });
}

//Hello lol

async function addFavoriteToUser({ userId, toiletsId }) {
	const user = await getUsersById(userId);
	return await user.addToilets(toiletsId);
}

async function addNoticeToUser({ userId, toiletsId, comment, note }) {
	const user = await getUsersById(userId);
	console.log(comment);
	console.log(toiletsId);
	// const notices = await user.addNotice_relation(
	// 	toiletsId.map((id) => ({ id })),
	// 	{ through: { comment, note } }
	// );
	// return notices;
	return await user.addNotice_relation({toiletsId, comment, note})
}


module.exports = {
	createUser,
	getUsersById,
	getAllUsers,
	addFavoriteToUser,
	addNoticeToUser,
};
