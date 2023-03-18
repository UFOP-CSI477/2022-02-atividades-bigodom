import { prisma } from '../../database/client.js';

export class UpdateLocalController {

    async handle(req, res) {

        const { nome, rua, numero, complemento, cidade_id } = req.body;

        const local = await prisma.local_coleta.update({

            where: {
                id: parseInt(req.params.id),
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