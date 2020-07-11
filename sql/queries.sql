-- making sure all queries below pull from employee_db
USE employee_db;

-- query to view all employee table data
CREATE PROCEDURE view_all_employees
AS
SELECT 
employee.id, 
employee.first_name,
employee.last_name,
role.title,
department.name AS department,
role.salary,
CONCAT(a.first_name, " ", a.last_name) AS manager

FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.id = department.id
LEFT JOIN employee a ON a.id = employee.manager_id
GO;

-- query to select all department table data

SELECT * FROM department;

-- query to select all role table data
SELECT * FROM role; 