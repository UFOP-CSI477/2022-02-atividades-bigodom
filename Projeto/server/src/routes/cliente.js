import { Router } from "express";
import { CreateClienteController } from "../controller/cliente/CreateClienteController.js";
import { DeleteClienteController } from "../controller/cliente/DeleteClienteController.js";
import { GetAllClienteController } from "../controller/cliente/GetAllClienteController.js";
import { GetByCpfClienteController } from "../controller/cliente/GetByCpfClienteController.js";
import { UpdateClienteController } from "../controller/cliente/UpdateClienteController.js";

const clienteRouter = Router();

const createClienteController = new CreateClienteController();
const getAllClienteController = new GetAllClienteController();
const getByCpfClienteController = new GetByCpfClienteController();
const updateClienteController = new UpdateClienteController();
const deleteClienteController = new DeleteClienteController();

clienteRouter.get("/clientes", getAllClienteController.handle);
clienteRouter.post("/clientes", createClienteController.handle);
clienteRouter.get("/clientes/:cpf", getByCpfClienteController.handle);
clienteRouter.put("/clientes/:cpf", updateClienteController.handle);
clienteRouter.delete("/clientes/:cpf", deleteClienteController.handle);

export { clienteRouter };