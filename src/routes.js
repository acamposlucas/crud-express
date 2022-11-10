const express = require("express");
const router = express.Router();

const CarController = require("./controllers/CarController");

router.get("/cars", CarController.getAll);
router.get("/car/:id", CarController.getCarById);

module.exports = router;
