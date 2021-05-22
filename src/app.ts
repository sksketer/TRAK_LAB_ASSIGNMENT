/* I've created this whole app and database by considering this app for ADMIN use only that is why I haven't used any JWT authentication or something which I could've used if this app want meant for anyone other than ADMIN to make the routes secure. */

import express from "express";
import deptRouter from "./routers/dept";
import empRouter from './routers/emp';
const app = express();

app.use(express.json());

// For all the routes starting with emp, we will use empRouter
app.use('/emp', empRouter);

// For all the routes starting with dept, we will use deptRouter
app.use('/dept', deptRouter);

app.listen(3000, () => {
    console.log('Running on port 3000');
});