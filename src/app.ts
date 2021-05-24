/* I've created this whole app and database by considering this app for ADMIN use only that is why I haven't used any JWT authentication or something which I could've used if this app want meant for anyone other than ADMIN to make the routes secure. */

import express from "express";
import deptRouter from "./routers/dept";
import empRouter from './routers/emp';
import  swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
const app = express();
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname + '/logs/', 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(express.json());

// For all the routes starting with emp, we will use empRouter
app.use('/emp', empRouter);

// For all the routes starting with dept, we will use deptRouter
app.use('/dept', deptRouter);

// SWAGGER Documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Project Running: ');
});