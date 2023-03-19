import { prisma } from '../../database/client.js';

export class DeleteManutencaoController {

    async handle(req, res) {
        const { id } = req.params;

        try {
            const manutencao = await prisma.manutencao.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return res.json(manutencao);
        }
        
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "manutencao não encontrado" });
        }
        
    }
}