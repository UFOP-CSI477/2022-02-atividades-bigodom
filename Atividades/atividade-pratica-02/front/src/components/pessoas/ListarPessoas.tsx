import { useState, useEffect } from "react";
import api from "../../services/api";
import { CidadeInterface } from "../cidades/ListarCidades";

export interface TipoInterface {
    id: number;
    tipo: string;
    fator: string;
}

export interface PessoaInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    documento: string;
    Cidade: CidadeInterface;
    Tipo_sanguineo: TipoInterface;
}

const ListarPessoas = () => {
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {
        api.get('/pessoas').then(response => {
            console.log(response.data);
            setPessoas(response.data);
        });
    }, []);

    return (
        <div>
            <div className="container">

            <h1>Listar Pessoas</h1>
            <ul>
                {pessoas.map(pessoa => (
                    <li key={pessoa.id}>
                        <p>Nome: {pessoa.nome}</p>
                        <p>Rua: {pessoa.rua}</p>
                        <p>Número: {pessoa.numero}</p>
                        <p>Complemento: {pessoa.complemento}</p>
                        <p>Documento: {pessoa.documento}</p>
                        <p>Cidade: {pessoa.Cidade.nome}</p>
                        <p>Tipo Sanguíneo: {pessoa.Tipo_sanguineo.tipo}{pessoa.Tipo_sanguineo.fator}</p>

                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default ListarPessoas;