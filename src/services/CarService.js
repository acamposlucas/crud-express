const db = require("../db");

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query("SELECT * FROM cars", (error, results) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(results);
			});
		});
	},

	getCarById: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`SELECT * FROM cars WHERE id = ${id}`,
				(error, results) => {
					if (error) {
						reject(error);
						return;
					}
					resolve(results);
				}
			);
		});
	},

	insert: (model, license_plate) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO cars (model, license_plate) VALUES (?, ?)`,
				[model, license_plate],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					}
					resolve(results.insertId);
				}
			);
		});
	},

	update: (id, model, license_plate) => {
		return new Promise((resolve, reject) => {
			db.query(
				`UPDATE cars SET model = ?, license_plate = ? WHERE id = ?`,
				[model, license_plate, id],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					}
					resolve(results);
				}
			);
		});
	},

	delete: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`DELETE FROM cars WHERE id = ?`,
				[id],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					}
					resolve(results);
				}
			);
		});
	},
};
