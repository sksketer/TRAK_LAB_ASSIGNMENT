import { Request, Response } from 'express';
import pool from '../db/db';
import * as constants from '../utility/constants';

// Class Based Controller
class EmpController {
    async createNewEmployee (req: Request, res: Response) {
        try {
            const { name, salary, dept } = req.body;
            const newEmployee = await pool.query(constants.EMP_INSERT_QUERY, [name, salary, dept]);
    
            res.send(newEmployee.rows[0]);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async searchEmployee (req: Request, res: Response) {
        try {
            const query = constants.EMP_SELECTION_QUERY;
            let searchQuery = '';

            if (req.query.searchBy) {

                const searchFilter = req.query.searchBy.toString().split(':');
                searchQuery = ` WHERE ${searchFilter[0]} ${searchFilter[1]} ${searchFilter[2]}`;
            }

            const employees = await pool.query(query + searchQuery + " ORDER BY emp_name");
    
            res.send(employees.rows);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async updateEmployee (req: Request, res: Response) {
        try {
            const { changes, updateBy } = req.body;
            const query = constants.EMP_UPDATION_QUERY;
            let changeQuery = '';

            const emp = await pool.query(constants.EMP_SELECTION_QUERY + " WHERE emp_id = $1", [updateBy.emp_id]);
            if (emp.rowCount == 0) {
                return res.status(400).json({ msg: 'EMPLOYEE NOT FOUND' });
            }

            for (let change in changes) {
                changeQuery += ' ' + change + ' = ' + changes[change] + ',';
            }

            changeQuery = changeQuery.substring(0, changeQuery.length - 1);

            await pool.query(query + changeQuery + 'WHERE emp_id = $1', [updateBy.emp_id]);
    
            res.json({ msg: 'EMPLOYEE UPDATED' });
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async deleteEmployee (req: Request, res: Response) {
        try {
            const emp = await pool.query(constants.EMP_SELECTION_QUERY + " WHERE emp_id = $1", [req.params.id]);
            if (emp.rowCount == 0) {
                return res.status(400).json({ msg: 'EMPLOYEE NOT FOUND' });
            }

            await pool.query(constants.EMP_DELETION_QUERY, [req.params.id]);
    
            res.json({ msg: 'EMPLOYEE DELETED' });
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default EmpController;