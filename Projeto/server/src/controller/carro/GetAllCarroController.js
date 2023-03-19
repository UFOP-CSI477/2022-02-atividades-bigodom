import { prisma } from '../../database/client.js';

export class GetAllCarroController {
    
    async handle(request, response) {
        const carro = await prisma.carro.findMany({
            
        }); 
        return response.json(carro);
    }
    
}