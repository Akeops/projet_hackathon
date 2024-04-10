// modele - service - controller - route

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUsersById);
router.post("/", userController.createUser);

router.post("/:id/toilets", userController.addFavoriteToUser);

router.post("/:id/toilets/notice", userController.addNoticeToUser);

module.exports = router;
