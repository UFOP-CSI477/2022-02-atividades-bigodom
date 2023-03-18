import { prisma } from "../../database/client.js";

export class GetByIdLocalController {
    async handle(req, res) {
        const { id } = req.params;
        const local = await prisma.local_coleta.findUnique({
            where: {
                id: parseInt(id),
            }
        });
        return res.json(local);
    }
}