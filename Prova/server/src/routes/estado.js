import { Router } from 'express';
import { CreateEstadoController } from '../controller/estados/createEstadoController';
import { DeleteEstadoController } from '../controller/estados/deleteEstadoController';
import { GetAllEstadoController } from '../controller/estados/getAllEstadoController';
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController';
import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController';
import { UpdateEstadoController } from '../controller/estados/UpdateEstadoController';

const estadoRouter = Router();

const getAllEstadoController = new GetAllEstadoController
const createEstadoController = new CreateEstadoController
const getByIdEstadoController = new GetByIdEstadoController
const UpdateEstadoController = new UpdateEstadoController
const deleteEstadoController = new DeleteEstadoController

// Get all estados
estadoRouter.get('/', getAllEstadoController.handle);

// Create estado
estadoRouter.post('/', CreateEstadoController.handle);

// Get estado by id
estadoRouter.get('/:id', getByIdEstadoController.handle);

// Update estado
estadoRouter.put('/:id', UpdateEstadoController.handle);

// Delete estado
estadoRouter.delete('/:id', deleteEstadoController.handle);

export { estadoRouter };