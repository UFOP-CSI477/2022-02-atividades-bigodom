import { prisma } from "../../database/client.js";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';

export class DeleteEstadoController{
    async handle(req, res) {
        const { id } = req.body;

        try {
            console.log(req.body);

            const estado = await prisma.estado.delete({
                where: {
                    id: ParseInt(id)
                }
            });

            res.json(estado);
        } catch (error) {
            if (error.code === "P2025" && error instanceof PrismaClientKnownRequestError) {
                return res.status(400).json({ error: "Estado não encontrado" });
            } else {
                return res.status(500).json({
                    message: error,
                    id: id
                });
            }
        }
    }
}
