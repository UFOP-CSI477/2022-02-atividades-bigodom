import { prisma } from "../../database/client.js";

export class GetAllTipoController {
  async handle(req, res) {
    const tipos = await prisma.tipo_sanguineo.findMany({
      
    });
    return res.json(tipos);
  }
}