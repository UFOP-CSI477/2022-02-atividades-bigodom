import { prisma } from "../../database/client.js"

export class CreateClienteController{
    async handle(req, res) {
        const { name, cpf, cnh, birthDate, email } = req.body;

        if ( name === "" ){
            return res.status(400).json({ error: "Nome do cliente não pode ser vazio" });
        }
        const cliente = await prisma.cliente.create({
            data: {
                name,
                cpf,
                cnh,
                birthDate,
                email
            }
        });

        console.log(cliente);
        return res.json(cliente);
    }
}