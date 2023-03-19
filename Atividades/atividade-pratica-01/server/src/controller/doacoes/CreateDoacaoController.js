import { prisma } from "../../database/client.js"

export class CreateDoacaoController{
    async handle(req, res) {
        const { pessoa_id, local_id, data } = req.body;

        const doacao = await prisma.doacao.create({
            data: {
                data,
                Pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                Local_coleta: {
                    connect: {
                        id: local_id
                    }
                }
            }
            
        });

        console.log(doacao);
        return res.json(doacao);
    }
}