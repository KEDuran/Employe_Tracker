-- making sure all queries below pull from employee_db
USE employee_db;

-- query to view all employee data
SELECT 
employee.id, 
employee.first_name,
employee.last_name,
role.title,
department.name,
role.salary,
employee.manager_id

FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.id = department.id;

-- query to select all department data

SELECT * FROM department;