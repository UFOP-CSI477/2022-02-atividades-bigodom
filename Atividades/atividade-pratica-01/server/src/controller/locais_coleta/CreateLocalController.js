import { prisma } from "../../database/client.js"

export class CreateLocalController{
    async handle(req, res) {
        const { nome, rua, numero, complemento, cidade_id } = req.body;

        if ( nome === "" ){
            return res.status(400).json({ error: "Nome do local não pode ser vazio" });
        }
        const local = await prisma.local_coleta.create({
            data: {
                nome,
                rua,
                numero,
                complemento,
                Cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }
        });

        console.log(local);
        return res.json(local);
    }
}