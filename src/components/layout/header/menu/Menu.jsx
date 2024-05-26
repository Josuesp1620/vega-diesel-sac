import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li className="dropdown">
                    <Link to="/">Inicio</Link>
                </li>
                <li><Link to="/about">Sobre Nosotros</Link></li>
                <li className="dropdown"><Link to="#">Servicios</Link>
                </li>                                        
                <li><Link to="/gallery"> Galeria </Link></li>
                <li><Link to="/contact"> Contacto </Link></li>     
            </ul>
        </>
    )
}
