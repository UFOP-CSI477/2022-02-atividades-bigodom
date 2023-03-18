import { prisma } from '../../database/client.js';

export class UpdateTipoController {

    async handle(req, res) {

        const { tipo, fator } = req.body;
        const { id } = req.params;

        const tipo_sanguineo = await prisma.tipo_sanguineo.update({

            where: {
                id: parseInt(id),
            },
            data: {
                tipo,
                fator
            }
        });
        return res.json(tipo_sanguineo);
    }
}