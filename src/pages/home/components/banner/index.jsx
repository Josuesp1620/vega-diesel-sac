import './index.css'
import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
       
        <>
        {/* banner-one */}
        <section className="banner style__four">
            <Swiper {...swiperOptions} className="banner-carousel">            
            <SwiperSlide className="slide-item">
                <div
                    className="slide__item__content"
                    style={{ backgroundImage: "url(https://irp.cdn-website.com/e623d918/import/clib/generadoresperu_com/dms3rep/multi/2078661-banner-16790-3288x2184.jpg)" }}
                    >
                   <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            {/* <h6>Imagen 2</h6> */}
                            </div>
                            <h1>
                            GRUPOS ELECTRÓGENOS EN LIMA 
                            </h1>
                            <p>
                            Ventas | Alquiler | Mantenimiento  | Instalaciones | Servicios | Tableros de transferencia 
                            </p>
                            <div className="btn-box">
                            <Link className="btn-one" to="/service-details">
                                {/* <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                </em> */}
                                <span>Solicitar Servicio</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
                <div
                    className="slide__item__content"
                    style={{ backgroundImage: "url(https://irp.cdn-website.com/e623d918/import/clib/generadoresperu_com/dms3rep/multi/2078661-banner-16790-3288x2184.jpg)" }}
                    >
                    <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            {/* <h6>Imagen 3</h6> */}
                            </div>
                            <h1>EXPERIENCIA Y CALIDAD</h1>
                            <p>Bienvenidos a nuestra empresa, donde combinamos experiencia y calidad para proyectos exitosos.</p>
                            <div className="btn-box">
                            <Link className="btn-one" to="/service-details">
                                {/* <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                </em> */}
                                <span>Solicitar Servicio</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
            <div
                className="slide__item__content"
                style={{ backgroundImage: "url(https://irp.cdn-website.com/e623d918/import/clib/generadoresperu_com/dms3rep/multi/2078661-banner-16790-3288x2184.jpg)" }}
                >
                <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            {/* <h6>Imagen 1</h6> */}
                            </div>
                            <h1>SOLUCIONES ENERGÉTICAS</h1>
                            <p>Descubre nuestras soluciones energéticas. Somos expertos en grupos electrógenos con calidad garantizada.</p>
                            <div className="btn-box">
                            <Link className="btn-one" to="/service-details">
                                {/* <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                </em> */}
                                <span>Solicitar Servicio</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            </SwiperSlide>

          </Swiper>
        </section>
        {/* banner-one */}
      </>
    )
}
