import express from 'express';
import { estadoRouter } from './routes/estado.js';

import { mainRouter } from './routes/main.js';

const PORT = 3000;

const app = express();
app.use(express.json());

//Routes
app.use(mainRouter);
app.use(estadoRouter);

//server - start/listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});