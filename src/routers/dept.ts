import express from 'express';
import DeptController from '../controllers/dept';
const deptRouter = express.Router();
const deptController = new DeptController();

// to create a new departmenr
deptRouter.post('/', deptController.createDepartment);

// TO search department
deptRouter.get('/', deptController.searchDepartment);

/* ******* To update department
deptRouter.put('/:id', deptController.updateDepartment);
******** */

// To delete a department
deptRouter.delete('/:id', deptController.deleteDepartment);

export default deptRouter;