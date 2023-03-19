import { prisma } from "../../database/client.js"

export class CreateCarroController{
    async handle(req, res) {
        const { placa, cor, modelo, marca, cpfCliente } = req.body;
        
        const carro = await prisma.carro.create({
            data: {
                placa,
                cor,
                modelo,
                marca,
                cliente: {
                    connect: {
                        cpf: cpfCliente
                    }
                }
            }
        });


        console.log(carro);
        return res.json(carro);
    }
}