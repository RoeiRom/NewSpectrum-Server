import cors from 'cors'
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

import indexRoute from './routes/index';

dotenv.config();

const app = express();
const whitelist = process.env.ALLOWED_CORS.split(' ');

app.use(cors({ origin: whitelist }));

app.use(express.json());

app.use('/', indexRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("App started on " + (process.env.PORT || 3000));
});
