import { Router } from "express";
import { CreateTipoController } from "../controller/tipos_sanguineos/CreateTipoController.js";
import { DeleteTipoController } from "../controller/tipos_sanguineos/DeleteTipoController.js";
import { GetAllTipoController } from "../controller/tipos_sanguineos/GetAllTipoController.js";
import { GetByIdTipoController } from "../controller/tipos_sanguineos/GetByIdTipoController.js";
import { UpdateTipoController } from "../controller/tipos_sanguineos/UpdateTipoController.js";

const tipoRouter = Router();

const getAllTipoController = new GetAllTipoController()
const getByIdTipoController = new GetByIdTipoController()
const createTipoController = new CreateTipoController()
const updateTipoController = new UpdateTipoController()
const deleteTipoController = new DeleteTipoController()

// Get all tipos
tipoRouter.get('/tipos', getAllTipoController.handle);

// Get tipo by id
tipoRouter.get('/tipos/:id', getByIdTipoController.handle);

// Create tipo
tipoRouter.post('/tipos', createTipoController.handle);

// Update tipo
tipoRouter.put('/tipos/:id', updateTipoController.handle);

// Delete tipo
tipoRouter.delete('/tipos/:id', deleteTipoController.handle);

export { tipoRouter };