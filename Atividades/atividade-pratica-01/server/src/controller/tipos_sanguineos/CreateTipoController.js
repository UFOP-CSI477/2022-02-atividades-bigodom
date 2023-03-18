import { prisma } from "../../database/client.js"

export class CreateTipoController{
    async handle(req, res) {
        const { fator, tipo } = req.body;

        const tipo_sanguineo = await prisma.tipo_sanguineo.create({
            data: {
                fator,
                tipo
            }
            
        });

        console.log(tipo_sanguineo);
        return res.json(tipo_sanguineo);
    }
}