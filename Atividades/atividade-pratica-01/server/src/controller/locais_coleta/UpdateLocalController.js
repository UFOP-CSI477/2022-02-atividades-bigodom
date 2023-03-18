import { prisma } from '../../database/client.js';

export class UpdateLocalController {

    async handle(req, res) {

        const { nome, rua, numero, complemento, cidade_id } = req.body;
        const { id } = req.params;

        const local = await prisma.local_coleta.update({

            where: {
                id: parseInt(id),
            },
            data: {
                nome,
                rua,
                numero,
                complemento,
                Cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }

        });
        return res.json(local);
    }
}