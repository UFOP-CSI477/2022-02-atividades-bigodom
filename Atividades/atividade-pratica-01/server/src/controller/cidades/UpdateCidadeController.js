import { prisma } from '../../database/client.js';

export class UpdateCidadeController {

    async handle(req, res) {

        const { id, nome, estado_id } = req.body;

        const cidade = await prisma.cidade.update({

            where: {
                id: parseInt(id),
            },
            data: {
                nome,
                updated_at: new Date(),
                Estado: {
                    connect: {
                        id: estado_id
                    }
                }
            }
        });
        return res.json(cidade);
    }
}