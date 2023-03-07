import { prisma } from "../../database/client.js";

export class GetAllEstadoController {
  async handle(req, res) {
    const estados = await prisma.estado.findMany();
    return res.json(estados);
  }
}