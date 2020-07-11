const inquirer = require("inquirer");
const cTable = require("console.table");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
// establish server connection configuration
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
// creating the connection to the employee_db database
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

// Function to validaate that each questions is entered.
function validation() {
	if (value != "") {
		return true;
	} else {
		return "Please answer the question.";
	}
}
// Intro question to kick-off the application flow
const introQuestion = [
	{
		type: "list",
		name: "intro",
		message: "What would you like to do?",
		choices: [
			"View all employees",
			"View all departments",
			"View all roles",
			"Add an employee",
			"Add a new deparmenet",
			"Add a new employee role",
			"Update employee role",
			"Exit application",
		],
		validate: validation,
	},
];

// Question to trigger the add new employee flow
const addEmployeeQuestion = [
	{
		type: "input",
		name: "firstName",
		message: "Please enter employee's first name.",
		validate: validation,
	},
	{
		type: "input",
		name: "lastName",
		message: "Please enter employee's last name.",
		validate: validation,
	},
	{
		type: "list",
		name: "employeeRole",
		message: "Please select the new employee's role.",
		choices: function () {
			var employeeRole = [];
			for (var i = 0; i < results.length; i++) {
				employeeRole.push(`${results[i].role}`);
			}
			return employeeChoices;
		},
	},
	{
		type: "list",
		name: "employeeManager",
		message: "Please select the new employee's manager.",
		choices: function () {
			var employeeMananger = [];
			for (var i = 0; i < results.length; i++) {
				employeeManager.push(
					`${results[i].first_name} ${results[i].last_name}`
				);
				return employeeMananger;
			}
		},
	},
];

// Question to trigger add new role flow
const addRoleQuestion = [
	{
		type: "input",
		name: "newRole",
		message: "Please enter the title of the new role.",
		validate: validation,
	},
];

// Question to trigger add new department flow
const addDepartmentQuestion = [
	{
		type: "input",
		name: "newDepartment",
		message: "Please enter the name of the new department.",
		validate: validation,
	},
];

// Question to trigger update employee flow
const updateEmployeeRoleQuestion = [
	{
		type: "list",
		name: "updateRole",
		message: "Which employee would you like to update?",
		choices: function () {
			var employeeChoices = [];
			for (var i = 0; i < results.length; i++) {
				employeeChoices.push(
					`${results[i].first_name} ${results[i].last_name}`
				);
			}
			return employeeChoices;
		},
	},
];

// Function to view all employees
function viewAllEmployees() {
	connection.query("CALL view_all_employees()", function (err, res) {
		var employeeStoredData = [];
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
			var employeeObject = {
				id: res[i][0],
				first_name: res[i][1],
				last_name: res[i][2],
				title: res[i][3],
				department: res[i][4],
				salary: res[i][5],
				manager: res[i][6],
			};
			employeeStoredData.push(employeeObject);
		}
		console.table(employeeStoredData);
	});
}

// start inquirer prompt for employee questions
inquirer.prompt(introQuestion).then((answer) => {
	if (answer.intro === "View all employees") {
		viewAllEmployees();
	}
});
