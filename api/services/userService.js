const { User } = require("../models/userModel");

// CRUD

async function createUser(user) {
    return await User.create(user);
}

//Méthode
async function getUsersById(id) {
    return await User.findByPk(id);
}

async function getAllUsers(criterias = {}) {
    const where = {}
    // where.alias !== undefined && (where.alias = criterias.alias);
    if (criterias.ID_users) {
        where.model = criterias.model;
    }
    if (criterias.nickname) {
        where.nickname = criterias.nickname;
    }
    if (criterias.email) {
        where.email = criterias.email;
    }
    return await User.findAll({ where });

}

module.exports = { createUser, getUsersById, getAllUsers };