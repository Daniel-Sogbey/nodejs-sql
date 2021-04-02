const connection = require("./db/db");

// console.log(connection);

connection.query(`SELECT * FROM employees WHERE id = ${4}`, (err, rows) => {
	if (err) throw err;

	console.log(rows.name);

	rows.map(row => {
		console.log(row.name);
	});
});

const employees = { name: "Daniel", location: "UK" };

connection.query("INSERT INTO employees SET ?", employees, (err, res) => {
	if (err) throw err;

	console.log(res.insertId);
});

connection.query(`DELETE FROM employees WHERE id =${5} `, (err, res) => {
	if (err) console.log(err);

	console.log(res.insertId, "Id");
});
