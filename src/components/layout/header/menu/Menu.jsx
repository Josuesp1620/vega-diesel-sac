import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li className="dropdown">
                    <Link to="/">Inicio</Link>
                </li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li className="dropdown"><a href="/#services">Servicios</a>
                </li>                                        
                <li><Link to="/gallery"> Galeria </Link></li>
                <li><Link to="/contact"> Contacto </Link></li>     
            </ul>
        </>
    )
}
