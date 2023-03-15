import { Router } from 'express';
import { CreateEstadoController } from '../controller/estados/createEstadoController.js';
import { DeleteEstadoController } from '../controller/estados/deleteEstadoController.js';
import { GetAllEstadoController } from '../controller/estados/getAllEstadoController.js';
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';
import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController.js';

const estadoRouter = Router();

const getAllEstadoController = new GetAllEstadoController
const createEstadoController = new CreateEstadoController
const getByIdEstadoController = new GetByIdEstadoController
const updateEstadoController = new UpdateEstadoController
const deleteEstadoController = new DeleteEstadoController

// Get all estados
estadoRouter.get('/estados', getAllEstadoController.handle);

// Create estado
estadoRouter.post('/estados', createEstadoController.handle);

// Get estado by id
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Update estado
estadoRouter.put('/estados', updateEstadoController.handle);

// Delete estado
estadoRouter.delete('/estados', deleteEstadoController.handle);

export { estadoRouter };