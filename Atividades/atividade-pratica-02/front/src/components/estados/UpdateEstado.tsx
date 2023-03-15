import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";


const UpdateEstado = () => {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        api.get(`/estados/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])

    const handleUpdateEstado = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            sigla
        }

        try {
            await api.put('/estados', data)
            alert('Estado atualizado com sucesso!')
            navigate('/estados')
        } catch (error) {
            alert('Erro ao atualizar estado!')
            console.log(error)
        }

    }

    return (
        <div>
            <h3>Cadastro de estados: {nome}-{sigla}</h3>
            <form onSubmit={handleUpdateEstado}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" 
                        name='nome' 
                        id='nome' 
                        value={nome} 
                        placeholder='Nome do estado'
                        onChange={event => setNome(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text"
                        name='sigla'
                        id='sigla'

                        value={sigla}
                        placeholder='Sigla do estado'
                        onChange={event => setSigla(event.target.value)}
                    />
                </div>

                <button type='submit'>Cadastrar</button>
                <button type='reset'>Limpar</button>
                <Link to='/'></Link>
            </form>
        </div>
    )
}

export default UpdateEstado