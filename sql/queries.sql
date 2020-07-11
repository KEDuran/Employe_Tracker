-- query to view all employee data
USE employee_db;

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
USE employee_db;

SELECT * FROM department;