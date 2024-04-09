const { db } = require("./db");

const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // timestamps: false,
  },
);

module.exports = { User };
