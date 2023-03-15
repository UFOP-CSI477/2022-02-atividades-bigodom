
import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {



    return (
        <div className="menu">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/estados">Listar Estados</Link></li>
                <li><Link to="/estados/create">Criar Estado</Link></li>
            </ul>
        </div>
    )
}

export default Menu