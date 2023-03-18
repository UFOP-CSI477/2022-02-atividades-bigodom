import { prisma } from '../../database/client.js';

export class DeleteDoacaoController {

    async handle(req, res) {
        const { id } = req.params;

        try {
            const doacao = await prisma.doacao.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return res.json(doacao);
        }
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "doacao não encontrado" });
        }
        
    }
}