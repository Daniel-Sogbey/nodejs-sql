// Require mysql from package;

const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
});

connection.connect(err => {
	if (err) {
		console.log(err.code, "error connecting to db");
		return;
	}

	console.log("connected to mysql db successfully");
});
