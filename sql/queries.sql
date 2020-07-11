-- making sure all queries below pull from employee_db
USE employee_db;

-- query to view all employee table data
SELECT 
employee.id, 
employee.first_name,
employee.last_name,
role.title,
department.name AS department,
role.salary,
employee.manager_id AS manager

FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.id = department.id;

-- query to select all department table data

SELECT * FROM department;

-- query to select all role table data
SELECT * FROM role; 