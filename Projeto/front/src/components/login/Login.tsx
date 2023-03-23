import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    return (
        <div className="container login pt-5">
            <div className="text-center">
                <div className="form-signin m-auto login-content">
                    <form>
                        <h1 className="text-white mb-3">Login</h1>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="usuario" placeholder="Nome de usuário" />
                            <label htmlFor="usuario">Nome de usuário</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="senha" placeholder="Senha" />
                            <label htmlFor="">Senha</label>
                        </div>
                        <div className='mt-3'>
                            <button type='submit' className='btn btn-outline-light'>Login</button>
                            
                        </div>
                        <div className='mt-3'>
                            <Link to='/register'><button className='btn btn-outline-warning'>Cadastre-se</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;