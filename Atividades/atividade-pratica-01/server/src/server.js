import express from 'express';
import cors from 'cors';
import { estadoRouter } from './routes/estado.js';
import { cidadeRouter } from './routes/cidade.js';
import { mainRouter } from './routes/main.js';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors())

//Routes
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);

//server - start/listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});