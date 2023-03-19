import { prisma } from '../../database/client.js';

export class UpdateCarroController {

    async handle(req, res) {

        const { placa, cor, modelo, marca, cpfCliente } = req.body;
        const { id } = req.params;

        const carro = await prisma.carro.update({
            where: {
                id: parseInt(id)
            },
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
            
        return res.json(carro);
    }
}