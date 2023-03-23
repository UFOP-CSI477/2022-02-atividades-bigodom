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
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListarCarro