import { prisma } from '../../database/client.js';

export class UpdatePessoaController {

    async handle(req, res) {

        const { nome, rua, numero, complemento, documento, cidade_id, tipo_id } = req.body;
        const { id } = req.params;

        const pessoa = await prisma.pessoa.update({

            where: {
                id: parseInt(id),
            },
            data: {
                nome,
                rua,
                numero,
                complemento,
                documento,
                Cidade: {
                    connect: {
                        id: cidade_id
                    }
                },
                Tipo_sanguineo: {
                    connect: {
                        id: tipo_id
                    }
                }
            }
        });
        return res.json(pessoa);
    }
}