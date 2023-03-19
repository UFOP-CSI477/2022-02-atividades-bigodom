import { Router } from "express";

import { CreateManutencaoController } from "../controller/manutencao/CreateManutencaoController.js";
import { DeleteManutencaoController } from "../controller/manutencao/DeleteManutencaoController.js";
import { GetAllManutencaoController } from "../controller/manutencao/GetAllManutencaoController.js";
import { GetByIdManutencaoController } from "../controller/manutencao/GetByIdManutencaoController.js";
import { UpdateManutencaoController } from "../controller/manutencao/UpdateManutencaoController.js";

const manutencaoRouter = Router();

const createManutencaoController = new CreateManutencaoController();
const getAllManutencaoController = new GetAllManutencaoController();
const getByCarroManutencaoController = new GetByIdManutencaoController();
const updateManutencaoController = new UpdateManutencaoController();
const deleteManutencaoController = new DeleteManutencaoController();

manutencaoRouter.get("/manutencoes", getAllManutencaoController.handle);
manutencaoRouter.post("/manutencoes", createManutencaoController.handle);
manutencaoRouter.get("/manutencoes/:id", getByCarroManutencaoController.handle);
manutencaoRouter.put("/manutencoes/:id", updateManutencaoController.handle);
manutencaoRouter.delete("/manutencoes/:id", deleteManutencaoController.handle);

export { manutencaoRouter };