import { prisma } from "../../database/client.js"

export class CreateCidadeController{
    async handle(req, res) {
        const { nome, estado_id } = req.body;

        if ( nome === "" ){
            return res.status(400).json({ error: "Nome do cidade não pode ser vazio" });
        }
        const cidade = await prisma.cidade.create({
            data: {
                nome,
                Estado: {
                    connect: {
                        id: estado_id
                    }
                }
            }
        });

        console.log(cidade);
        return res.json(cidade);
    }
}