// modele - service - controller - route

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);

router.post("/:id/toilet", userController.createFavorites);

module.exports = router;
