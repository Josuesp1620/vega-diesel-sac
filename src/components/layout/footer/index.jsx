import './index.css'
import { Link } from "react-router-dom";

export default function Footer2() {
    return (
        <>
        {/* main-footer */}
        <footer className="main__footer two p_relative">
            <div className="main__footer__top">
            <div className="footer__top p_relative d_block">
                <div className="auto_container">
                <div className="footer__top__content">
                    <div className="footer__top__left">
                    <div className="logo-widget">
                        <figure className="footer-logo">
                        <Link to="/">
                            <img src="assets/images/logo.jpeg" alt="" />
                        </Link>
                        </figure>
                    </div>
                    </div>
                    <div className="footer__top__right">
                    <div className="footer__social__media">
                        <ul>
                        <li>
                            <Link to="/">
                            <span className="icon-2" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="icon-1" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="icon-23" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="icon-3" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <span className="icon-24" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer__middle p_relative d_block">
                <div className="auto_container">
                <div className="footer__middle__content">
                    <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                        <div className="footer_widget left">
                        <div className="widget_title">
                            <h4>Ponerse en contacto</h4>
                        </div>
                        <div className="widget_content">
                            <ul className="links_list clearfix">
                            {/* <li>
                                Tincidunt neque pretium lectus <br />
                                donec risus.
                            </li> */}
                            <li>
                                <span>Dirección:</span> Cal. Azalias Mza. Q Lote. 10 Apv. Sol de Santa Anita (Altura Capilla Inmaculada)
                            </li>
                            <li>
                                <span>Correo:</span>{" "}
                                <Link to="mailto:example@gmail.com">vegadiesel@gmail.com</Link>
                            </li>
                            <li>
                                <span>Teléfono:</span>{" "}
                                <Link to="tel:3336660000"> +51 999 374 434</Link>
                            </li>
                            </ul>
                        </div>
                        <div className="widget_media">
                            <ul>
                            <li>
                                <Link to="/">
                                <span className="icon-2" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <span className="icon-1" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <span className="icon-23" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 footer_column">
                        <div className="footer_widget links_widget ml_100">
                        <div className="widget_title">
                            <h4>Links</h4>
                        </div>
                        <div className="widget_content">
                            <ul className="links_list clearfix">
                            <li>
                                <a href="/about">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="/services">Servicios</a>
                            </li>
                            {/* <li>
                                <Link to="/">Case</Link>
                            </li>
                            <li>
                                <Link to="/">Roof Repair</Link>
                            </li> */}
                            <li>
                                <a href="/contact">Contáctanos</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                        <div className="footer_widget links_widget">
                        <div className="widget_title">
                            <h4>Working Hours</h4>
                        </div>
                        <div className="widget_content">
                            <ul className="links_list clearfix">
                            <li>Tincidunt neque pretium lectus donec risus.</li>
                            <li>Mon - Fri: 9:00AM - 6:00PM</li>
                            <li>Sat - Sun: 8:00AM - 4:00PM</li>
                            </ul>
                        </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-1" /> */}
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 p-xl-0 footer_column">
                        <div className="footer_widget links_widget">
                        <div className="widget_title">
                            <h4>Follow Instagram</h4>
                        </div>
                        <div className="widget_content">
                            <ul className="instagram_list clearfix">
                            <li>
                                <div className="inner__box">
                                <div className="image__box">
                                    <Link to="/">
                                    <img
                                        src="assets/images/resource/instagram-01.png"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner__box">
                                <div className="image__box">
                                    <Link to="/">
                                    <img
                                        src="assets/images/resource/instagram-02.png"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner__box">
                                <div className="image__box">
                                    <Link to="/">
                                    <img
                                        src="assets/images/resource/instagram-03.png"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner__box">
                                <div className="image__box">
                                    <Link to="/">
                                    <img
                                        src="assets/images/resource/instagram-04.png"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner__box">
                                <div className="image__box">
                                    <Link to="/">
                                    <img
                                        src="assets/images/resource/instagram-05.png"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner__box">
                                <div className="image__box">
                                    <Link to="/">
                                    <img
                                        src="assets/images/resource/instagram-06.png"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer_bottom p_relative">
            <div className="auto_container">
                <div className="bottom_inner p_relative">
                <div className="copyright">
                    <p>
                    {" "}
                    Copyright 2024 by <Link to="/">Vega Diesel SAC</Link> theme All Right
                    Reserved.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </footer>
        {/* main-footer end */}
        </>

    )
}
