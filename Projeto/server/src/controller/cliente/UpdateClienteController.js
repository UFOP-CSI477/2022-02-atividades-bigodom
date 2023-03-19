import { prisma } from '../../database/client.js';

export class UpdateClienteController {

    async handle(req, res) {

        const { name, cnh, birthDate, email } = req.body;
        const { cpf } = req.params;

        const cliente = await prisma.cliente.update({
            where: {
                cpf: String(cpf)
            },
            data: {
                name,
                cnh,
                birthDate,
                email
            }
        });
            
        return res.json(cliente);
    }
}