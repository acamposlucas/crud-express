const { json } = require("body-parser");
const CarService = require("../services/CarService");

module.exports = {
	getAll: async (req, res) => {
		let data = {
			error: "",
			result: [],
		};

		let cars = await CarService.getAll();

		for (let i in cars) {
			data.result.push({
				id: cars[i].id,
				model: cars[i].model,
				license_plate: cars[i].license_plate,
			});
		}

		res.json(data);
	},

	getCarById: async (req, res) => {
		let data = {
			error: "",
			result: {},
		};

		let car = await CarService.getCarById(req.params.id);

		if (car) {
			data.result = car;
		}

		res.json(data);
	},
};
