import { prisma } from "../../database/client.js";

export class GetAllDoacaoController {
    async handle(req, res) {
        const doacao = await prisma.doacao.findMany({
            include: {
                Pessoa: true,
                Local_coleta: true
            }
        });
        return res.json(doacao);
    }
}