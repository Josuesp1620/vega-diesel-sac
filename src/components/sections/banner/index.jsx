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
                style={{ backgroundImage: "url(assets/images/banner/banner-10.png)" }}
                >
                <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            <h6>Imagen 1</h6>
                            </div>
                            <h1>
                            Titulo
                            </h1>
                            <p>
                            Texto de descripción de imagen
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
                    style={{ backgroundImage: "url(assets/images/banner/banner-11.png)" }}
                    >
                   <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            <h6>Imagen 2</h6>
                            </div>
                            <h1>
                            Titulo
                            </h1>
                            <p>
                            Texto de descripción de imagen
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
                    style={{ backgroundImage: "url(assets/images/banner/banner-12.png)" }}
                    >
                    <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            <h6>Imagen 3</h6>
                            </div>
                            <h1>
                            Titulo
                            </h1>
                            <p>
                            Texto de descripción de imagen
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
          </Swiper>
        </section>
        {/* banner-one */}
      </>
    )
}
