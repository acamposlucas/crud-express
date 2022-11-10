const express = require("express");
const router = express.Router();

const CarController = require("./controllers/CarController");

router.get("/cars", CarController.getAll);
router.get("/car/:id", CarController.getCarById);
router.post("/car", CarController.insert);

module.exports = router;
