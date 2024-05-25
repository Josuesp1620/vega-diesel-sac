import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <>
                                    <ul className="navigation clearfix">
                                        <li className="dropdown">
                                            <Link to="/">Home</Link>
                                            {/* <ul>
                                                <li><Link to="/">Home One</Link></li>
                                                <li><Link to="/index-2">Home Two</Link></li>
                                                <li><Link to="/index-3">Home Three</Link></li>
                                                <li><Link to="/index-4">Home Four</Link></li>
                                                <li className="dropdown"><Link to="/">Header Style</Link>
                                                    <ul>
                                                        <li><Link to="/">Header Style 01</Link></li>
                                                        <li><Link to="/index-2">Header Style 02</Link></li>
                                                        <li><Link to="/index-3">Header Style 03</Link></li>
                                                        <li><Link to="/index-4">Header Style 04</Link></li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li className="dropdown"><Link to="#">Services</Link>
                                            <ul>
                                                <li><Link to="/services">Services</Link></li>
                                                <li><Link to="/services-single">Services Single</Link></li>
                                                <li><Link to="/services-details">Services Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><Link to="#">Pages</Link>
                                            <ul>
                                                <li className="dropdown"><Link to="#">Team</Link>
                                                    <ul>
                                                        <li><Link to="/team-1">Team 1</Link></li>
                                                        <li><Link to="/team-2">Team 2</Link></li>
                                                        <li><Link to="/team-details">Team Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link to="#">Testimonial</Link>
                                                    <ul>
                                                        <li><Link to="/testimonial-1">Testimonial 1</Link></li>
                                                        <li><Link to="/testimonial-2">Testimonial 2</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link to="#">Project</Link>
                                                    <ul>
                                                        <li><Link to="/project-1">Project 1</Link></li>
                                                        <li><Link to="/project-2">Project 2</Link></li>
                                                        <li><Link to="/project-details">Project Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link to="#">Shop</Link>
                                                    <ul>
                                                        <li><Link to="/shop">Shop</Link></li>
                                                        <li><Link to="/shop-details">Shop Details</Link></li>
                                                        <li><Link to="/cart">Cart Page</Link></li>
                                                        <li><Link to="/checkout">Checkout</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/faq">FAQ</Link></li>
                                                <li><Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/error">Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><Link to="#">News</Link>
                                            <ul>
                                                <li><Link to="/blog-grid">Blog Grid</Link></li>
                                                <li><Link to="/blog-standard">Blog Standard</Link></li>
                                                <li><Link to="/blog-details">Blog Details</Link></li>
                                            </ul>
                                        </li>  
                                        <li><Link to="/contact"> Contact </Link></li>     
                                    </ul>
        </>
    )
}
