import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


const Navbar = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex flex-wrap align-items-center justify-content-center text-white justify-content-lg-start text-decoration-none col-1">LIFE BANK
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                        <li><Link to="/estados" className="nav-link px-2 text-white">Estados</Link></li>
                        <li><Link to="/estados/create" className="nav-link px-2 text-white">Criar Estado</Link></li>
                        <li><Link to="/cadastroPessoa" className="nav-link px-2 text-white">Cadastrar Pessoa</Link></li>
                        <li><Link to="/listarPessoas" className="nav-link px-2 text-white">Listar Pessoas</Link></li>
                    </ul>
{/*                     <div>
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-outline-warning">Cadastre-se</button>
                    </div> */}
                </div>

            </div>

        </header>
    );
}

export default Navbar;