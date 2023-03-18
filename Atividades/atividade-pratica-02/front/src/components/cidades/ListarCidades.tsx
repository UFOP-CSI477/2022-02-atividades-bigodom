import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { EstadoInterface } from "../estados/ListEstados";

export interface CidadeInterface {
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
    Estado: EstadoInterface;
}

const ListarCidades = () => {

    const [ cidades, setCidades ] = useState<CidadeInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/cidades')
            .then(response => {
                console.log(response.data);
                setCidades(response.data);
            })

    }, [])

    return (
        <div>
            <h2>Lista de Cidades</h2>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
            <tbody>
                {cidades.map(cidade => (
                    <tr key={cidade.id}>
                        <td>{cidade.id}</td>
                        <td>{cidade.nome}</td>
                        <td>{cidade.Estado.nome}</td>
                        <td>{cidade.created_at}</td>
                        <td>{cidade.updated_at}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default ListarCidades