import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CadastrarCliente = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnh, setCnh] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleNewClient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            name,
            cpf,
            cnh,
            email,
            birthdate
        }

        try {
            await api.post('/clientes', data);
            alert('Cliente cadastrado com sucesso!');
            navigate('/listarclientes');
        } catch (error) {
            alert('Erro ao cadastrar cliente!');
        }
    }

    return (
        <div className='container'>
            <h1 className='text-white text-center mb-4'>Cadastro de cliente</h1>
            <form onSubmit={handleNewClient}>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' className='form-control' id='name' placeholder='Nome' onChange={e => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='cpf'>CPF</label>
                    <input type='text' className='form-control' id='cpf' placeholder='CPF' onChange={e => setCpf(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='cnh'>CNH</label>
                    <input type='text' className='form-control' id='cnh' placeholder='CNH' onChange={e => setCnh(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='birthdate'>Data de nascimento</label>
                    <input type='date' className='form-control' id='birthdate' placeholder='Data de nascimento' onChange={e => setBirthdate(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Cadastrar</button>
                <Link to='/listarclientes' className='btn btn-danger ml-2'>Cancelar</Link>
            </form>
        </div>

    );
}

export default CadastrarCliente;