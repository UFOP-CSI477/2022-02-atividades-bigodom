import { prisma } from '../../database/client.js';

export class GetByIdCidadeController {

    async handle(req, res) {
        const { id } = req.params;
        const cidade = await prisma.cidade.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                Estado: true,
            }
        });
        return res.json(cidade);
    }
}