import { prisma } from '../../database/client.js';

export class UpdateManutencaoController {

    async handle(req, res) {

        const { dataEsperada, id_car, status, description, price } = req.body;
        const { id } = req.params;

        const manutencao = await prisma.manutencao.update({
            where: {
                id: parseInt(id)
            },
            data: {
                dataEsperada,
                status,
                description,
                price,
                carro: {
                    connect: {
                        id: parseInt(id_car)
                    }
                }
            }
        });
            
        return res.json(manutencao);
    }
}