import { Router } from "express";

const mainRouter = Router()

mainRouter.get("/", (req, res) => {
    res.json({ message: "API Server is running" });
});

export { mainRouter }