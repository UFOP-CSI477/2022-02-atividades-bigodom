import { prisma } from '../../database/client.js';

export class GetAllPessoaController {
    
    async handle(request, response) {
        const pessoas = await prisma.pessoa.findMany({
            include: {
                Cidade: true,
                Tipo_sanguineo: true,
            }
        }); 
        return response.json(pessoas);
    }
    
}