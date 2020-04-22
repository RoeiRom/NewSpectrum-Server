import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
    console.log("App started on " + (process.env.PORT || 3000));
});