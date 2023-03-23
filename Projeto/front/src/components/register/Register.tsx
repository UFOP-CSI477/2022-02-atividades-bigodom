import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
    return (
        <div className="container register pt-5">
            <div className="text-center">
                <div className="form-signin m-auto register-content">
                    <form>
                        <h1 className="text-white mb-5">Cadastre-se</h1>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="usuario" placeholder="Nome de usuário" />
                            <label htmlFor="usuario">Nome de usuário</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="senha" placeholder="Senha" />
                            <label htmlFor="">Senha</label>
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className='btn btn-outline-warning'>Cadastre-se</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;