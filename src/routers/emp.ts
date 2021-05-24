import express from 'express';
const empRouter = express.Router();
import EmpController from '../controllers/emp';
const empController = new EmpController();

// To create new Employee
empRouter.post('/', empController.createNewEmployee);

// TO Search employee 
empRouter.get('/', empController.searchEmployee);

// To update an employee
empRouter.put('/', empController.updateEmployee);

// TO delete an employee
empRouter.delete('/:id', empController.deleteEmployee);

export default empRouter;