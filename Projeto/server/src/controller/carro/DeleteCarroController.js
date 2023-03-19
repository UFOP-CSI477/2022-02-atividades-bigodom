import { prisma } from '../../database/client.js';

export class DeleteCarroController {

    async handle(req, res) {
        const { id } = req.params;

        try {
            const carro = await prisma.carro.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return res.json(carro);
        }
        
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "carro não encontrado" });
        }
        
    }
}