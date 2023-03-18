import { prisma } from '../../database/client.js';

export class UpdatePessoaController {

    async handle(req, res) {

        const { id, nome, estado_id } = req.body;

        const pessoa = await prisma.pessoa.update({

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
        return res.json(pessoa);
    }
}