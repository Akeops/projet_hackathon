const express = require("express");

const toiletController = require("../controllers/toiletController");

const router = express.Router();

router.get("/", toiletController.getAllToilets);
router.get("/:id", toiletController.getToiletById);

module.exports = router;
