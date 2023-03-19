import { Router } from "express";

import { CreateCarroController } from "../controller/carro/CreateCarroController.js";
import { DeleteCarroController } from "../controller/carro/DeleteCarroController.js";
import { GetAllCarroController } from "../controller/carro/GetAllCarroController.js";
import { GetByIdCarroController } from "../controller/carro/GetByIdCarroController.js";
import { UpdateCarroController } from "../controller/carro/UpdateCarroController.js";

const carroRouter = Router();

const createCarroController = new CreateCarroController();
const getAllCarroController = new GetAllCarroController();
const getByIdCarroController = new GetByIdCarroController();
const updateCarroController = new UpdateCarroController();
const deleteCarroController = new DeleteCarroController();

carroRouter.get("/carros", getAllCarroController.handle);
carroRouter.post("/carros", createCarroController.handle);
carroRouter.get("/carros/:id", getByIdCarroController.handle);
carroRouter.put("/carros/:id", updateCarroController.handle);
carroRouter.delete("/carros/:id", deleteCarroController.handle);

export { carroRouter };
