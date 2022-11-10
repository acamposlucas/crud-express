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
};
