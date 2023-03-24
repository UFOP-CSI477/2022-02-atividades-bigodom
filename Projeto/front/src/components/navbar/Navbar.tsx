import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-golden text-decoration-none h4">🔧 GOLDEN HAMMER 🔧
                </Link>
                <ul className="nav nav-pills">
                    <li className='nav-item'><Link to="/listarclientes" className="nav-link text-white px-3">Listar Clientes</Link></li>
                    <li className='nav-item'><Link to="/listarcarros" className="nav-link text-white px-3">Listar Carros</Link></li>
                    <li className='nav-item'><Link to="/listarmanutencoes" className="nav-link text-white px-3">Listar Manutenções</Link></li>
                </ul>
                <div className='text-end'>
                    <Link to='/login'><button type="button" className="btn btn-outline-light me-2 px-3 mx-3">Login</button></Link>
                    <Link to='/register'><button type="button" className="btn btn-outline-warning px-3">Cadastre-se</button></Link>
                </div>
            </header>

        </div>
    );
}

export default Navbar;