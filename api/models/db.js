const Sequelize = require("sequelize");

const db = new Sequelize("sqlite:database.sqlite3", {
  // logging:false,
});

module.exports = { db };
