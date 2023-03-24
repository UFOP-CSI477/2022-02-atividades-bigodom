import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { CarroInterface } from '../carro/ListarCarro';


export interface ManutencaoInterface {
    id: number;
    dataEsperada: Date;
    id_car: number;
    status: string;
    price: number;
    description: string;
    carro: CarroInterface;
    updatedAt: Date;
    createdAt: Date;
}

const ListarManutencao = () => {
    const [manutencoes, setmanutencoes] = useState<ManutencaoInterface[]>([])

    useEffect(() => {
        api.get('/manutencoes').then(response => {
            console.log(response.data);
            setmanutencoes(response.data);
        });
    }, []);

    const handleDeleteManutencao = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão da manutenção?" ) ) {
            return
        }

        try {
            await api.delete(`/manutencoes/${id}`);
            const newManutencoes = manutencoes.filter(manutencoes => manutencoes.id !== id);
            setmanutencoes(newManutencoes);
        } catch(error) {
            alert("Erro na exclusão da manutenção!");
            console.error(error);
        }
    }


    return (
        <div className='container'>

            <h1 className='text-white text-center mb-4'>Listagem de manutenções</h1>
            <ul className='list-group list-group-horizontal list-group-numbered'>
                {manutencoes.map(manutencoes => (
                    <li className='list-group-item text-bg-dark border-white' key={manutencoes.id}>
                        <p>Marca: {manutencoes.carro.marca}</p>
                        <p>Modelo: {manutencoes.carro.modelo}</p>
                        <p>Descrição: {manutencoes.description}</p>
                        <p>Preço: {manutencoes.price}</p>
                        <p>Status: {manutencoes.status}</p>
                        <button onClick={() => handleDeleteManutencao(manutencoes.id)}>Excluir</button>
                    </li>
                    
                ))}
                

            </ul>
        </div>
    )
}

export default ListarManutencao