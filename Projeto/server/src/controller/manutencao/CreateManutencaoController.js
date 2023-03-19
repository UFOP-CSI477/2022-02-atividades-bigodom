import { prisma } from "../../database/client.js"

export class CreateManutencaoController{
    async handle(req, res) {
        const { dataEsperada, id_car, status, description, price } = req.body;
        
        const manutencao = await prisma.manutencao.create({
            data: {
                dataEsperada,
                status,
                description,
                price,
                carro: {
                    connect: {
                        id: id_car
                    }
                }
            }
        });


        console.log(manutencao);
        return res.json(manutencao);
    }
}