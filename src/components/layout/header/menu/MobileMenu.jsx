import { Link } from "react-router-dom";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {

    return (
        <>

            {/*Mobile Menu */}
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu}></div>
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                
                <nav className="menu-box">
                <div className="nav-logo">
                    <Link to="/">
                    <img src="assets/images/logo.jpeg" alt="" title="" />
                    </Link>
                </div>
                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                            
                                <li>
                                    <Link to="/" onClick={handleMobileMenu}>Inicio</Link>                                   
                                </li>
                                <li>
                                    <Link to="/about/" onClick={handleMobileMenu}>Sobre Nosotros</Link>
                                </li>

                                <li>
                                    <Link to="/#" onClick={handleMobileMenu}>Servicios</Link>                                   
                                </li>
                                <li>
                                    <Link to="/gallery" onClick={handleMobileMenu}>Galeria</Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={handleMobileMenu}>Contactanos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h4>Informacón de Contacto</h4>
                        <ul>
                        <li>Cal. Azalias Mza. Q Lote. 10 Apv. Sol de Santa Anita (Altura Capilla Inmaculada)</li>
                        <li>
                            <Link to="tel:+8801682648101">+51 999 374 434</Link>
                        </li>
                        <li>
                            <Link to="mailto:info@example.com">vegadiesel@example.com</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                        <li>
                            <Link to="/">
                            <span className="fab fa-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="fab fa-facebook-square" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="fab fa-pinterest-p" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="fab fa-instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="fab fa-youtube" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/*End Mobile Menu */}
            
            
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
export default MobileMenu;
