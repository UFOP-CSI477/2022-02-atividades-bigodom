import { prisma } from '../../database/client.js';

export class GetByIdManutencaoController {

    async handle(req, res) {
        const { id } = req.params;
        const manutencao = await prisma.manutencao.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return res.json(manutencao);
    }
}