import express from 'express';
const app = express();
import cors from 'cors';
import db from './database';
import routes from './routes/index.routes';


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use('/', routes)

export default app;