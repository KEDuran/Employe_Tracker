var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",

	// my local MySQL default port
	port: 3306,

	// username
	user: "root",

	// password
	password: "server_password",
	database: "employee_db",
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	connection.end();
});

module.exports = connection;
