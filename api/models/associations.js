const { db } = require("./db");

const { DataTypes } = require("sequelize");

const { Toilet } = require("./toiletModel");
const { User } = require("./userModel");

// Associations

const Comment = db.define("comment", {
  comment: {
    type: DataTypes.TEXT, // Spécifiez le type de l'attribut ici, par exemple TEXT pour un commentaire
    allowNull: true, // Ce champ ne peut pas être null, doit être spécifié lors de la création d'un 'Comment'
  },
  note: {
    type: DataTypes.BOOLEAN, // Spécifiez le type de l'attribut ici, par exemple TEXT pour un commentaire
    allowNull: true, // Ce champ ne peut pas être null, doit être spécifié lors de la création d'un 'Comment'
  },
});



User.belongsToMany(Toilet, { through: "Notice" });
Toilet.belongsToMany(User, { through: "Notice" });

User.belongsToMany(Toilet, { through: "Favorite" });
Toilet.belongsToMany(User, { through: "Favorite" });

module.exports = { User, Toilet, Comment };
