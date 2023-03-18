import { prisma } from "../../database/client.js"

export class CreatePessoaController{
    async handle(req, res) {
        const { nome, rua, numero, complemento, documento, cidade_id, tipo_id } = req.body;

        if ( nome === "" ){
            return res.status(400).json({ error: "Nome do pessoa não pode ser vazio" });
        }
        const pessoa = await prisma.pessoa.create({
            data: {
                nome,
                rua,
                numero,
                complemento,
                documento,
                Cidade: {
                    connect: {
                        id: cidade_id
                    }
                },
                Tipo_sanguineo: {
                    connect: {
                        id: tipo_id
                    }
                }
            }
        });

        console.log(pessoa);
        return res.json(pessoa);
    }
}