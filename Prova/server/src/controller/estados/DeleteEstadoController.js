import { prisma } from "../../database/client.js";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export class DeleteEstadoController{
    async handle(req, res) {
        const { id } = req.params;

        try {
            console.log(request.body);

            const estado = await prisma.estado.delete({
                where: {
                    id: Number(id)
                }
            });

            res.json(estado);
        } catch (error) {
            if (error.code === "P2025" && error instanceof PrismaClientKnownRequestError) {
                return res.status(404).json({ error: "Estado não encontrado" });
            } else {
                return res.status(500).json({
                    message: error,
                    id: id
                });
            }
        }
    }
}
