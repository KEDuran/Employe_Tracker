var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // my local MySQL default port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "server_password",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});