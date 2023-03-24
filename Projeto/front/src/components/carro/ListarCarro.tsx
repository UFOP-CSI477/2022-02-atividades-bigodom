import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export interface CarroInterface {
    id: number;
    placa: string;
    modelo: string;
    marca: string;
    cor: string;
    cpfcliente: string;
}

const ListarCarro = () => {
    const [carros, setCarros] = useState<CarroInterface[]>([])

    useEffect(() => {
        api.get('/carros').then(response => {
            console.log(response.data);
            setCarros(response.data);
        });
    }, []);

    const handleDeleteCarro = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão da carro?" ) ) {
            return
        }

        try {
            await api.delete(`/carros/${id}`);
            const newCarros = carros.filter(carros => carros.id !== id);
            setCarros(newCarros);

        } catch(error) {
            alert("Erro na exclusão da carro!");
            console.error(error);
        }

    }

    return (
        <div className='container'>

            <h1 className='text-white text-center mb-4'>Listagem de veiculo</h1>
            <ul className='list-group list-group-horizontal list-group-numbered'>
                {carros.map(carros => (
                    <li className='list-group-item text-bg-dark border-white' key={carros.id}>
                        <p>Modelo: {carros.modelo}</p>
                        <p>Marca: {carros.marca}</p>
                        <p>Placa: {carros.placa}</p>
                        <p>Cor: {carros.cor}</p>
                        <button onClick={()=>handleDeleteCarro(carros.id)}>Excluir</button>
                    </li>
                    
                ))}
                
            </ul>
        </div>
    )
}

export default ListarCarro