import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}

const data_swipe_slice = [
    {
        title: <>Venta de <br />Grupos Electrógenos</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Mantenimiento de <br/> Grupos Electrógenos</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Mantenimiento de <br/> Motores Diesel</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Alquiler de <br/> Grupos Electrógenos</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Instalación de <br/> Grupos Electrógenos</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Instalación de <br/> Tableros de Trasferencia</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Mantenimiento de <br/> Compresoras de Aire</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
    {
        title: <>Mantenimiento de <br/>  Motores Eléctricos</>,
        content: "Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento"
    },
]
export default function CardSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">

                {data_swipe_slice.map((slide) => (
                    <SwiperSlide className="slide-item">
                        <div className="inner__content__four">
                            <div className="service__content__four">
                            <div className="image_layer">
                                <div
                                    className="image__hover__bg__one"
                                    style={{
                                    background: '#2D2D30',
                                    borderRadius: '20px',
                                    }}
                                />
                                <div
                                    className="image__hover__bg__two"
                                    style={{
                                    background: '#FFC107',
                                    borderRadius: '20px',
                                    }}
                                />
                                </div>
                                <div className="lower__content__four">
                                <div className="icon__box p_ralative">
                                    <div
                                    className="icon__hover__bg__one"
                                    style={{
                                        background: '#FFCE3A',
                                        borderRadius: '20px',
                                    }}
                                    />
                                    <div
                                    className="icon__hover__bg__two"
                                    style={{
                                        background: '#3D3C3F',
                                        borderRadius: '20px'
                                    }}
                                    />
                                    <div className="icon__outer">
                                    <div className="icon__bg">
                                        <span className="icon-35" />
                                    </div>
                                    </div>
                                </div>
                                <div className="service__text">
                                    <h4>
                                    <a href="#">{slide.title}</a>
                                    </h4>
                                    <p>{slide.content}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}                

            </Swiper>

            <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                    <span>›</span>
                </button>
            </div>
        </>
    )
}
