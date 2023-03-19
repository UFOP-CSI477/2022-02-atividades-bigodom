import { prisma } from '../../database/client.js';

export class GetAllManutencaoController {
    
    async handle(request, response) {
        const manutencao = await prisma.manutencao.findMany({
            include: {
                carro: true
            }
        }); 
        return response.json(manutencao);
    }
    
}