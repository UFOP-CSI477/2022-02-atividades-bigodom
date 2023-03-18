import { prisma } from "../../database/client.js";

export class GetAllLocalController {
    async handle(req, res) {
        const local = await prisma.local_coleta.findMany({
            include: {
                Cidade: true,
            }
        });
        return res.json(local);
    }
}