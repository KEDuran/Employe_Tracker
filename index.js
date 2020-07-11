const inquirer = require("inquirer");

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
		],
		validate: validation,
	},
];

// Question to trigger the add flow
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
        choices:
		validate: validation,
    },
    {
		type: "list",
		name: "employeeRole",
        message: "Please select the new employee's role.",
        choices: function () {
			var employeeRole = [];
			for (var i = 0; i < results.length; i++) {
				employeeRole.push(
					`${results[i].role}`
				);
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
					`${results[i].first_name} ${results[i].last_name}`)
			return employeeMananger;
		},
	},
];

// Question to trigger update flow
cons updateQuestion = [
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
