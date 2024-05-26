import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}

const data_slider = [
    {
        title: "Acuerdos de Valor para nuestros Clientes",
        subtitle: "Garantía asegurada con el servicio más confiable",
        content: "Contamos con una atención personalizada y técnicamente soportada con experiencia y tecnología, diseñados para satisfacer las necesidades en cuanto a generación de energía y motores.	"
    },
    {
        title: "Acuerdos de Valor para nuestros Clientes",
        subtitle: "Compromiso con la Seguridad",
        content: "Nuestro compromiso como organización con la seguridad y salud en el trabajo de nuestros colaboradores como de nuestros clientes es de vital importancia, por lo que cumplimos los procedimientos homologados de trabajo en cada una de las áreas."
    },
    {
        title: "Acuerdos de Valor para nuestros Clientes",
        subtitle: "Sistema de Cumplimiento",
        content: "Tenemos un sistema de cumplimiento para prevenir que nuestra empresa y los colaboradores se vean envueltos en actos de corrupción y/o en conductas deshonestas o ilegales."
    },
]
export default function SliderAgreements() {
    return (
        <> 
        
        <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                      <div className="swiper-wrapper">
                        {data_slider.map((slide) => (
                            <SwiperSlide className="slide">
                                <div className="swiper-slide testimonials__block__one">
                                <div className="testimonials__info">
                                    <div className="authore__img">
                                    </div>
                                    <div className="testimonials__text">
                                    <p>{slide.content}</p>
                                    </div>
                                    <div className="authore__info">
                                    <h5>{slide.title}</h5>
                                    <p>{slide.subtitle}</p>
                                    </div>
                                    <div className="quote">
                                    <span className="icon-22" />
                                    </div>
                                </div>
                                </div>
                            </SwiperSlide>  
                        ))}
                                              
                      </div>
                    </Swiper>
      </>
      
    )
}
