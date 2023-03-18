import { prisma } from '../../database/client.js';

export class DeletePessoaController {

    async handle(req, res) {
        const { id } = req.params;

        try {
            const pessoa = await prisma.pessoa.delete({
                where: {
                    id: ParseInt(id)
                }
            });
            return res.json(pessoa);
        }
        catch (err) {
            console.error(err)
            return res.status(400).json({ error: "pessoa não encontrada" });
        }
        
    }
}