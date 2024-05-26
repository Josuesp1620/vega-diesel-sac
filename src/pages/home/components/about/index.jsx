import './index.css'

export default function About() {
    return (
        <>
        {/* about-section */}
        <section className="about__section four p_relative see__pad">
            <div className="anim-icon">
            <div className="parallax-scene parallax-scene-1">
                <div
                data-depth="0.30"
                className="icon layer-bg"
                style={{ backgroundImage: "url(assets/images/icons/icon-01.svg)" }}
                />
            </div>
            <div
                className="icon icons-1 "
                data-parallax='{"x": 100}'
                style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}
            />
            <div
                className="icon icons-2 "
                data-parallax='{"x": 100}'
                style={{ backgroundImage: "url(assets/images/shape/shape-44.png)" }}
            />
            </div>
            <div className="auto_container">
            <div className="about__section__content">
                <div className="row">
                <div className="col-lg-5 col-md-12 ps-xl-0 pe-xl-4">
                    <div className="about_left__section p_relative">
                    <div className="about__image__block">
                        <div className="inner__box">
                        <div className="image__box">
                            <figure className="image">
                            <img
                                src="public/assets/images/home/services/servicio-4-home.jpeg"
                                alt=""
                            />
                            </figure>
                        </div>
                        </div>
                        <div
                        className="about__two__expericence"
                        style={{
                            // backgroundImage: "url(assets/images/shape/shape-42.png)"
                            background:"white"
                        }}
                        >
                        <div className="about__two__text">
                            <h2>+5 </h2>
                            <span>Años de Experiencia</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 offset-lg-1 ps-xl-4">
                    <div className="about__three__left">
                    <div className="title">           
                    <div className="sub__title">
                        <h6>Acerca de Vega Diesel</h6>
                        </div>             
                        <div className="main__title">
                        <h2>
                            Somos Especialistas <br />
                            En Grupos Electrógenos  <br />
                            Experiencia y Calidad. <br />
                        </h2>
                        </div>
                        
                    </div>
                    <div className="normal__text">
                        <p>
                        ¡Bienvenido a nuestra página web! Somos Vega Diesel SAC, una empresa peruana con amplia experiencia en el rubro de los grupos electrógenos. Con la ayuda de profesionales comprometidos, hemos logrado aumentar nuestra participación en el mercado, comenzando con pequeños servicios técnicos.
                        </p>
                    </div>
                    <div className="engineer__section">
                        <div className="engineer__section__top">
                        <div className="engineer__section__right">
                            <div className="engineer__content">
                            <div className="engineer__content__list">
                                <ul>
                                <li>
                                    <span className="icon-21" /> 
                                    Venta de Grupos Electrógenos
                                </li>
                                <li>
                                    <span className="icon-21" /> 
                                    Mantenimiento de Grupos Electrógenos
                                </li>
                                <li>
                                    <span className="icon-21" /> 
                                    Alquiler de Grupos Electrógenos
                                </li>
                                <li>
                                    <span className="icon-21" />
                                    Instalación de Grupos Electrógenos
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* <div className="about__btn">
                        <Link className="btn-one" to="/about">
                            <em>
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            </em>
                            <span>Read More</span>
                        </Link>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* about-section-end */}
        </>

    )
}
