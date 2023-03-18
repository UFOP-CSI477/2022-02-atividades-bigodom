import { prisma } from '../../database/client.js';

export class DeleteLocalController {

    async handle(req, res) {
        const { id } = req.params;

        try {
            const local = await prisma.local_coleta.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return res.json(local);
        }
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "local não encontrado" });
        }
        
    }
}