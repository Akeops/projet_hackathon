const { Toilet } = require("../models/toiletModel");

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

const { readFile } = require("node:fs/promises");

let data;

async function insertData() {
	let tempData = await readFile("./sanisettesparis.json", {
		encoding: "utf8",
	});
	data = JSON.parse(tempData);
	return data;
}

insertData().then(() => {
	data.forEach((element) => {
		console.log(element.url_fiche_equipement);
	});
});

module.exports = { createToilet, getToiletById, getAllToilets };
