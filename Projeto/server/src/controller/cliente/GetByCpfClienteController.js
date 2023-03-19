import { prisma } from '../../database/client.js';

export class GetByCpfClienteController {

    async handle(req, res) {
        const { cpf } = req.params;
        const cliente = await prisma.cliente.findUnique({
            where: {
                cpf: String(cpf)
            }
        });
        return res.json(cliente);
    }
}