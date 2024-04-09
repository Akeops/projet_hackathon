const { db } = require("./db");

const { DataTypes } = require("sequelize");

const { Toilet } = require("./toiletModel");
const { User } = require("./userModel");

// Associations

const Notice = db.define("notice", {
	comment: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
	note: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
	},
});

User.belongsToMany(Toilet, { through: Notice });
Toilet.belongsToMany(User, { through: Notice });

User.belongsToMany(Toilet, { through: "Favorite" });
Toilet.belongsToMany(User, { through: "Favorite" });

module.exports = { User, Toilet, Comment: Notice };
