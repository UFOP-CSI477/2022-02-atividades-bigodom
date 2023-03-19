import { prisma } from '../../database/client.js';

export class UpdateDoacaoController {

    async handle(req, res) {

        const { pessoa_id, local_id, data } = req.body;
        const { id } = req.params;

        const doacao = await prisma.doacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                data,
                Pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                Local_coleta: {
                    connect: {
                        id: local_id
                    }
                }
            }

        });
        return res.json(doacao);
    }
}