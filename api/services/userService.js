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

async function createFavorite(favorite) {
	return await User.addFavorite(favorite);
}

module.exports = { createUser, getUsersById, getAllUsers, createFavorite };
