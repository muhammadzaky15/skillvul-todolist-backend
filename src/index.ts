import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import todoListRouter from "./routers/todolist.route"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static('uploads'))

app.use('/v1/todolist', todoListRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server running');
});

app.listen(3000, () => {
  console.log("server berjalan di port ", 3000)
});