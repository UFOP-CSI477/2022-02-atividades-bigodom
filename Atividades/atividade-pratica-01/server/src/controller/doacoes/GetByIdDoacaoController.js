import { prisma } from "../../database/client.js";

export class GetByIdDoacaoController {
    async handle(req, res) {
        const { id } = req.params;
        const doacao = await prisma.doacao.findUnique({
            where: {
                id: parseInt(id),
            }
        });
        return res.json(doacao);
    }
}