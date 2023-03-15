import { response, Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.status(401).send("<h1>Unauthorized</h1>")
});

mainRouter.get('/admin', (req, res) => {
    res.json({ message: "API Server is running" });
});

export { mainRouter };