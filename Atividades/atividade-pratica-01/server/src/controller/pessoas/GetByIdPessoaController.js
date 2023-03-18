import { prisma } from '../../database/client.js';

export class GetByIdPessoaController {

    async handle(req, res) {
        const { id } = req.params;
        const pessoa = await prisma.pessoa.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                Cidade: true
            }
        });
        return res.json(pessoa);
    }
}