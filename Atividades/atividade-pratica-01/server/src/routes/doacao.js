import { Router } from "express";

import { CreateDoacaoController } from "../controller/doacoes/createDoacaoController.js";
import { GetAllDoacaoController } from "../controller/doacoes/GetAllDoacaoController.js";
import { GetByIdDoacaoController } from "../controller/doacoes/GetByIdDoacaoController.js";
import { UpdateDoacaoController } from "../controller/doacoes/UpdateDoacaoController.js";
import { DeleteDoacaoController } from "../controller/doacoes/DeleteDoacaoController.js";

const doacaoRouter = Router();

const createDoacaoController = new CreateDoacaoController();
const getAllDoacaoController = new GetAllDoacaoController();
const getByIdDoacaoController = new GetByIdDoacaoController();
const updateDoacaoController = new UpdateDoacaoController();
const deleteDoacaoController = new DeleteDoacaoController();

// Get all doacoes
doacaoRouter.get("/doacoes", getAllDoacaoController.handle);

// Create doacao
doacaoRouter.post("/doacoes", createDoacaoController.handle);

// Get doacao by id
doacaoRouter.get("/doacoes/:id", getByIdDoacaoController.handle);

// Update doacao
doacaoRouter.put("/doacoes/:id", updateDoacaoController.handle);

// Delete doacao
doacaoRouter.delete("/doacoes/:id", deleteDoacaoController.handle);

export { doacaoRouter };