// DB Constants

export const DB_USERNAME = 'postgres';
export const DB_PASSWORD = 'sk123';
export const DB_DBNAME = 'edms_database';
export const DB_HOST = 'localhost';
export const DB_PORT = 5432;

// Department Constants

export const DEPT_INSERT_QUERY = 'INSERT INTO dept(dept_name) VALUES($1) RETURNING *';
export const DEPT_SELECTION_QUERY = 'SELECT * FROM dept';
export const DEPT_DELETION_QUERY = 'DELETE FROM dept WHERE dept_id = $1';

// Employee Constants

export const EMP_INSERT_QUERY = 'INSERT INTO employee (emp_name, emp_salary, dept_id) VALUES ($1, $2, $3) RETURNING *';
export const EMP_SELECTION_QUERY = 'SELECT * FROM employee';
export const EMP_UPDATION_QUERY = 'UPDATE employee SET';
export const EMP_DELETION_QUERY = 'DELETE FROM employee WHERE emp_id = $1';