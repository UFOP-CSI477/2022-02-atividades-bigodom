import { prisma } from "../../database/client.js";

export class GetCidadeByEstadoController {
  async handle(req, res) {
    const { id } = req.params;
    const cidades = await prisma.cidade.findMany({
      where: {
        estadoId: parseInt(id),
      },
    });
    return res.json(cidades);
  }
}