import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export interface ClienteInterface {
    name: string;
    cpf: string;
    cnh: string;
    birthdate: Date;
    email: string;
}

const ListarCliente = () => {
    const [clientes, setclientes] = useState<ClienteInterface[]>([])

    useEffect(() => {
        api.get('/clientes').then(response => {
            console.log(response.data);
            setclientes(response.data);
        });
    }, []);

    return (
        <div className='container'>

            <h1 className='text-white text-center mb-4'>Listagem de clientes</h1>
            <ul className='list-group list-group-horizontal list-group-numbered'>
                {clientes.map(clientes => (
                    <li className='list-group-item text-bg-dark border-white' key={clientes.cpf}>
                        <p>Nome: {clientes.name}</p>
                        <p>Cpf: {clientes.cpf}</p>
                        <p>Email: {clientes.email}</p>
                        <p>Cnh: {clientes.cnh}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListarCliente