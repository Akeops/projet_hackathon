const { db } = require("./db");

const { DataTypes } = require("sequelize");

const { Toilet } = require("./toiletModel");
const { User } = require("./userModel");

// Associations

const Notice = db.define(
	"notice",
	{
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		note: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{ timestamps: false }
);

User.belongsToMany(Toilet, {
	through: Notice,
	as: "notice_relation",
});
Toilet.belongsToMany(User, {
	through: Notice,
	as: "notice_relation",
});

User.belongsToMany(Toilet, { through: "Favorite" });
Toilet.belongsToMany(User, { through: "Favorite" });

module.exports = { User, Toilet, Comment: Notice };
