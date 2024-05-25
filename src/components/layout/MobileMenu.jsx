import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
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
                            
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link to="/" onClick={handleMobileMenu}>Inicio</Link>
                                    {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link to="/" onClick={handleMobileMenu}>Home One</Link></li>
                                        <li><Link to="/index-2" onClick={handleMobileMenu}>Home Two</Link></li>
                                        <li><Link to="/index-3" onClick={handleMobileMenu}>Home Three</Link></li>
                                        <li><Link to="/index-4" onClick={handleMobileMenu}>Home Four</Link></li>
                                        <li className={isActive.subMenuKey == 2 ? "dropdown current" : "dropdown"}>
                                        
                                        <Link to="/" onClick={handleMobileMenu}>Header Style</Link>
                                        <ul style={{ display: `${isActive.subMenuKey == 2 ? "block" : "none"}` }}>
                                            <li><Link to="/" onClick={handleMobileMenu}>Header Style 01</Link></li>
                                            <li><Link to="/index-2" onClick={handleMobileMenu}>Header Style 02</Link></li>
                                            <li><Link to="/index-3" onClick={handleMobileMenu}>Header Style 03</Link></li>
                                            <li><Link to="/index-4" onClick={handleMobileMenu}>Header Style 04</Link></li>
                                        </ul>

                                        <div className={isActive.subMenuKey == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 2)}><span className="fa fa-angle-right" /></div>
                                    </li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li><Link to="/about/" onClick={handleMobileMenu}>Sobre Nosotros</Link></li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link to="/#" onClick={handleMobileMenu}>Servicios</Link>
                                    {/* <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link to="/services" onClick={handleMobileMenu}>Services</Link></li>
                                        <li><Link to="/services-single" onClick={handleMobileMenu}>Services Single</Link></li>
                                        <li><Link to="/services-details" onClick={handleMobileMenu}>Services Details</Link></li>
                                    </ul>

                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div> */}
                                </li>


                                {/* <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                    <Link to="/#" onClick={handleMobileMenu}>Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link to="/" onClick={handleMobileMenu}>Team</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                                                <li><Link to="/team" onClick={handleMobileMenu}>Our Team 1</Link></li>
                                                <li><Link to="/team-2" onClick={handleMobileMenu}>Our Team 2</Link></li>
                                                <li><Link to="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                                            <Link to="/" onClick={handleMobileMenu}>Testimonial</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                                                <li><Link to="/testimonial-1" onClick={handleMobileMenu}>Testimonial 1</Link></li>
                                                <li><Link to="/testimonial-2" onClick={handleMobileMenu}>Testimonial 2</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 7 ? "dropdown current" : "dropdown"}>
                                            <Link to="/" onClick={handleMobileMenu}>Project</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 7 ? "block" : "none"}` }}>
                                                <li><Link to="/project-1" onClick={handleMobileMenu}>Project 1</Link></li>
                                                <li><Link to="/project-2" onClick={handleMobileMenu}>Project 2</Link></li>
                                                <li><Link to="/project-details" onClick={handleMobileMenu}>Project Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 7)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 8 ? "dropdown current" : "dropdown"}>
                                            <Link to="/" onClick={handleMobileMenu}>Shop</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 8 ? "block" : "none"}` }}>
                                                <li><Link to="/shop" onClick={handleMobileMenu}>Shop</Link></li>
                                                <li><Link to="/shop-details" onClick={handleMobileMenu}>Shop Details</Link></li>
                                                <li><Link to="/cart" onClick={handleMobileMenu}>Cart Page</Link></li>
                                                <li><Link to="/checkout" onClick={handleMobileMenu}>Checkout</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 8)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li><Link to="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                                        <li><Link to="/pricing" onClick={handleMobileMenu}>Pricing</Link></li>
                                        <li><Link to="/error" onClick={handleMobileMenu}>Error</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li> */}



                                {/* <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                                    <Link to="/#" onClick={handleMobileMenu}>News</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <li><Link to="/blog-grid" onClick={handleMobileMenu}>Blog Grid</Link></li>
                                        <li><Link to="/blog-standard" onClick={handleMobileMenu}>Blog Standard</Link></li>
                                        <li><Link to="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                                <li><Link to="/contact" onClick={handleMobileMenu}>Contactanos</Link></li>
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
