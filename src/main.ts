import cors from 'cors';
import express from 'express';

import indexRoute from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', indexRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("App started on " + (process.env.PORT || 3000));
});
