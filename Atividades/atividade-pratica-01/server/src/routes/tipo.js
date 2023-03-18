import { Router } from "express";
import { GetAllTipoController } from "../controller/tipos_sanguineos/GetAllTipoController.js";
import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";

const tipoRouter = Router();

const getAllTipoController = new GetAllTipoController()
const getByIdEstadoController = new GetByIdEstadoController()

// Get all tipos
tipoRouter.get('/tipos', getAllTipoController.handle);

// Get tipo by id
tipoRouter.get('/tipos/:id', getByIdEstadoController.handle);

export { tipoRouter };