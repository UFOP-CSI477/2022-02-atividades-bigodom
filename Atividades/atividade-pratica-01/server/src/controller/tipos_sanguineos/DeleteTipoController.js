import { prisma } from '../../database/client.js';

export class DeleteTipoController {

    async handle(req, res) {
        const { id } = req.params;

        try {
            const tipo = await prisma.tipo_sanguineo.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return res.json(tipo);
        }
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "tipo não encontrada" });
        }
        
    }
}