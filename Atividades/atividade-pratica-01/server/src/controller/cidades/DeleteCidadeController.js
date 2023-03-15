import { prisma } from '../../database/client.js';

export class DeleteCidadeController {

    async handle(req, res) {
        const { id } = req.body;

        try {
            const cidade = await prisma.cidade.delete({
                where: {
                    id: ParseInt(id)
                }
            });
            return res.json(cidade);
        }
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "Cidade não encontrada" });
        }
        
    }
}