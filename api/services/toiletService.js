const { Toilet } = require("../models/associations");

async function createToilet(player) {
	await Toilet.create(player);
}

async function getToiletById(id) {
	return await Toilet.findByPk(id);
}

async function getAllToilets(criterias = {}) {
	const where = {};

	if (criterias.type) {
		where.type = criterias.type;
	}

	if (criterias.adress) {
		where.adress = criterias.adress;
	}

	if (criterias.borough) {
		where.borough = criterias.borough;
	}

	if (criterias.hours) {
		where.hours = criterias.hours;
	}

	if (criterias.disableAcs) {
		where.disableAcs = criterias.disableAcs;
	}

	if (criterias.babyAccess) {
		where.babyAccess = criterias.babyAccess;
	}

	if (criterias.geoPointLon) {
		where.geoPointLon = criterias.geoPointLon;
	}

	if (criterias.geoPointLat) {
		where.geoPointLat = criterias.geoPointLat;
	}

	return await Toilet.findAll({ where });
}

// const dataSansClesInutiles = data.map((obj) => {
// 	const { url_fiche_equipement, geo_shape, ...data } = obj;
// 	return data;
// });

// console.log(dataSansClesInutiles);

module.exports = { createToilet, getToiletById, getAllToilets };
