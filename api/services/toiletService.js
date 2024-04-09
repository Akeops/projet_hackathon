const { log } = require("console");
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

async function insertData() {
	let data = await readFile("../sanisettesparis.json", {
		encoding: "utf-8",
	});
	let toilets = JSON.parse(data);
	console.log(toilets);
	return toilets;
}

insertData();

// fs.readFile("../sanisettesparis.csv", "utf8", (err, data) => {
// 	console.log(data);
// });

module.exports = { createToilet, getToiletById, getAllToilets };
