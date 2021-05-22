import express from 'express';
const empRouter = express.Router();
import EmpController from '../controllers/emp';
const empController = new EmpController();

// create an employee
empRouter.post('/', empController.createEmployee);

// Search employee BASED ON ANY FIELD AND ALSO SORT THEM ACCORDINGLY (according to user preference)
empRouter.get('/', empController.searchEmployee);

// update an employee
empRouter.put('/', empController.updateEmployee);

// delete an employee
empRouter.delete('/:id', empController.deleteEmployee);

export default empRouter;