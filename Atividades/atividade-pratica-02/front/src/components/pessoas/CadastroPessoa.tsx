import 'bootstrap/dist/css/bootstrap.min.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { CidadeInterface } from '../cidades/ListarCidades';
import ListEstados, { EstadoInterface } from '../estados/ListEstados';
import './CadastroPessoa.css';
import { TipoInterface } from './ListarPessoas';



const CadastroPessoaForm = () => {
    const [tiposSanguineos, setTiposSanguineos] = useState<TipoInterface[]>([]);
    const [estados, setEstados] = useState<EstadoInterface[]>([]);
    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        api.get('/tipos')
            .then(response => {
                setTiposSanguineos(response.data);
            })
    }, [])

    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, [])

    const navigate = useNavigate()


    const handleEstadoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const estadoId = event.target.value;
        api.get(`/cidades/estado/${estadoId}`)
            .then(response => {
                setCidades(response.data);
            })
    }

    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [documento, setDocumento] = useState('');
    const [cidade_id, setCidadeId] = useState(0);
    const [tipo_sanguineo_id, setTipoSanguineoId] = useState(0);


    const handleNewPessoa = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            nome,
            rua,
            numero,
            complemento,
            documento,
            cidade_id,
            tipo_sanguineo_id
        }

        try {
            await api.post('/pessoas', data)
            alert('Pessoa cadastrada com sucesso!')
            navigate('/pessoas')
        } catch (error) {
            alert('Erro ao cadastrar pessoa!')
            console.log(error)
        }
        
    }



    return (
        <div className='container mb-3'>
            <h4 className='mb-3 mt-3'>Formulário</h4>
            <form onSubmit={handleNewPessoa} className='cadastroPessoaForm'>
                <div className='mb-3'>
                    <label className='form-label'>Nome</label>
                    <input className='form-control' type="text" placeholder="Digite seu nome" />
                </div>
                <div className='mb-3'>
                    <label className="form-label">CPF</label>
                    <input className='form-control' type="text" placeholder="Digite seu CPF" />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Tipo Sanguíneo</label>
                    <select className='form-select tipos_sanguineos'>
                        <option selected disabled>Selecione</option>
                        {tiposSanguineos.map(tipo => (
                            <option key={tipo.id} value={tipo.id}>{tipo.tipo}{tipo.fator}</option>
                        ))}

                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <select className='form-select estados' onChange={handleEstadoChange}>
                        <option selected disabled>Selecione</option>
                        {estados.map(estado => (
                            <option key={estado.id} value={estado.id}>{estado.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cidade</label>
                    <select className='form-select cidades'>
                        <option selected disabled>Selecione</option>
                        {cidades.map(cidade => (
                            <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Rua</label>
                    <input className='form-control' type="text" placeholder="Digite sua rua" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Número</label>
                    <input className='form-control' type="text" placeholder="Digite seu número" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Complemento</label>
                    <input className='form-control' type="text" placeholder="Digite seu complemento" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default CadastroPessoaForm;