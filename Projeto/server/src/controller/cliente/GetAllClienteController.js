import { prisma } from '../../database/client.js';

export class GetAllClienteController {
    
    async handle(request, response) {
        const cliente = await prisma.cliente.findMany({
            
        }); 
        return response.json(cliente);
    }
    
}