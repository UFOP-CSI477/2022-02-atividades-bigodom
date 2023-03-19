import { prisma } from '../../database/client.js';

export class GetByIdCarroController {

    async handle(req, res) {
        const { id } = req.params;
        const carro = await prisma.carro.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return res.json(carro);
    }
}