import { prisma } from "../../database/client.js";

export class CreateEstadoController{
    async handle(req, res) {
        const { nome, sigla } = req.body;

        if ( nome === "" ){
            return res.status(400).json({ error: "Nome do estado não pode ser vazio" });
        }
        const estado = await prisma.estado.create({
            data: {
                nome,
                sigla
            }
        });

        console.log(estado);
        return res.status(201).json(estado);
    }
}
