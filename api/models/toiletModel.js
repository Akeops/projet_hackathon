const { db } = require("./db");

const { DataTypes } = require("sequelize");

const Toilet = db.define(
	"Toilet",
	{
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		adress: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		borough: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hours: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		disableAcs: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		babyAccess: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},
		geoPointLon: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		geoPointLat: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		// timestamps: false,
	}
);

module.exports = { Toilet };
