import { prisma } from '../../database/client.js';

export class DeleteClienteController {

    async handle(req, res) {
        const { cpf } = req.params;

        try {
            const cliente = await prisma.cliente.delete({
                where: {
                    cpf: String(cpf)
                }
            });
            return res.json(cliente);
        }
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "cliente não encontrado" });
        }
        
    }
}