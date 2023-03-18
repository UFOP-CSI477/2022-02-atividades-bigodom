import { Router }  from "express";

import { CreateLocalController } from "../controller/locais_coleta/CreateLocalController.js";
import { DeleteLocalController } from "../controller/locais_coleta/DeleteLocalController.js";
import { GetAllLocalController } from "../controller/locais_coleta/GetAllLocalController.js";
import { GetByIdLocalController } from "../controller/locais_coleta/GetByIdLocalController.js";
import { UpdateLocalController } from "../controller/locais_coleta/UpdateLocalController.js";

const localRouter = Router();

const getAllLocalController = new GetAllLocalController()
const getByIdLocalController = new GetByIdLocalController()
const createLocalController = new CreateLocalController()
const updateLocalController = new UpdateLocalController()
const deleteLocalController = new DeleteLocalController()

// Get all local
localRouter.get('/local', getAllLocalController.handle);

// Get local by id
localRouter.get('/local/:id', getByIdLocalController.handle);

// Create local
localRouter.post('/local', createLocalController.handle);

// Update local
localRouter.put('/local/:id', updateLocalController.handle);

// Delete local
localRouter.delete('/local/:id', deleteLocalController.handle);

export { localRouter };