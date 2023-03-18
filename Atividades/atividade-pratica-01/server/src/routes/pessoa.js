import { Router } from "express";
import { DeletePessoaController } from "../controller/pessoas/DeletePessoaController.js";
import { CreatePessoaController } from "../controller/pessoas/CreatePessoaController.js";
import { GetAllPessoaController } from "../controller/pessoas/GetAllPessoaController.js";
import { GetByIdPessoaController } from "../controller/pessoas/GetByIdPessoaController.js";
import { UpdatePessoaController } from "../controller/pessoas/UpdatePessoaController.js";

const pessoaRouter = Router();

const createPessoaController = new CreatePessoaController();
const getAllPessoaController = new GetAllPessoaController();
const getByIdPessoaController = new GetByIdPessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();

// Create pessoa
pessoaRouter.post('/pessoas', createPessoaController.handle);

// Get all pessoas
pessoaRouter.get('/pessoas', getAllPessoaController.handle);

// Get pessoa by id
pessoaRouter.get('/pessoas/:id', getByIdPessoaController.handle);

// Update pessoa
pessoaRouter.put('/pessoas/:id', updatePessoaController.handle);

// Delete pessoa
pessoaRouter.delete('/pessoas/:id', deletePessoaController.handle);

export { pessoaRouter };