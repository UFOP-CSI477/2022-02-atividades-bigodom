import { prisma } from "../../database/client.js";

export class GetByIdEstadoController {
    async handle(req, res) {
        const { id } = req.params;
        const estado = await prisma.estado.findUnique({
        where: {
            id: Number(id),
        },
        });
        return res.json(estado);
    }
}