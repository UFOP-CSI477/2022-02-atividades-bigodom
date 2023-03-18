import { prisma } from "../../database/client.js";

export class GetByIdTipoController {
    async handle(req, res) {
        const { id } = req.params;
        const tipo = await prisma.tipo_sanguineo.findUnique({
            where: {
                id: parseInt(id),
            }
        });
        return res.json(tipo);
    }
}