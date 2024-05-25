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
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">

                <SwiperSlide className="slide-item">
                    <div className="inner__content__four">
                        <div className="service__content__four">
                            <div className="image_layer">
                            <div
                                className="image__hover__bg__one"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-50.png)"
                                }}
                            />
                            <div
                                className="image__hover__bg__two"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-51.png)"
                                }}
                            />
                            </div>
                            <div className="lower__content__four">
                            <div className="icon__box p_ralative">
                                <div
                                className="icon__hover__bg__one"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-49.png)"
                                }}
                                />
                                <div
                                className="icon__hover__bg__two"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-48.png)"
                                }}
                                />
                                <div className="icon__outer">
                                <div className="icon__bg">
                                    <span className="icon-16" />
                                </div>
                                </div>
                            </div>
                            <div className="service__text">
                                <h4>
                                <Link to="/services-details">Mantenimiento <br />Preventivo y correctivo</Link>
                                </h4>
                                <p>
                                Alta disponibilidad de profesionales y trabajadores especializados en mantenimiento
                                </p>
                            </div>
                            {/* <div className="more__btn">
                                <Link to="/services-details">
                                Read More <span className="icon-53" />{" "}
                                <span className="icon-52" />
                                </Link>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                    <div className="inner__content__four">
                        <div className="service__content__four">
                            <div className="image_layer">
                            <div
                                className="image__hover__bg__one"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-50.png)"
                                }}
                            />
                            <div
                                className="image__hover__bg__two"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-51.png)"
                                }}
                            />
                            </div>
                            <div className="lower__content__four">
                            <div className="icon__box p_ralative">
                                <div
                                className="icon__hover__bg__one"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-49.png)"
                                }}
                                />
                                <div
                                className="icon__hover__bg__two"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-48.png)"
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
                                <Link to="/services-details">Cortes de energía programados e imprevistos las 24H​​​​​​​S</Link>
                                </h4>
                                <p>
                                Soporte de energía en eventos corporativos y especiales
                                </p>
                            </div>
                            {/* <div className="more__btn">
                                <Link to="/services-details">
                                Read More <span className="icon-53" />{" "}
                                <span className="icon-52" />
                                </Link>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                    <div className="inner__content__four">
                        <div className="service__content__four">
                            <div className="image_layer">
                            <div
                                className="image__hover__bg__one"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-50.png)"
                                }}
                            />
                            <div
                                className="image__hover__bg__two"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-51.png)"
                                }}
                            />
                            </div>
                            <div className="lower__content__four">
                            <div className="icon__box p_ralative">
                                <div
                                className="icon__hover__bg__one"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-49.png)"
                                }}
                                />
                                <div
                                className="icon__hover__bg__two"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-48.png)"
                                }}
                                />
                                <div className="icon__outer">
                                <div className="icon__bg">
                                    <span className="icon-12" />
                                </div>
                                </div>
                            </div>
                            <div className="service__text">
                                <h4>
                                <Link to="/services-details">Suministro de energía en torres grúa </Link>
                                </h4>
                                <p>
                                Nuestras atenciones son en camionetas 100% implementadas para los servicios
                                </p>
                            </div>
                            {/* <div className="more__btn">
                                <Link to="/services-details">
                                Read More <span className="icon-53" />{" "}
                                <span className="icon-52" />
                                </Link>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                    <div className="inner__content__four">
                        <div className="service__content__four">
                            <div className="image_layer">
                            <div
                                className="image__hover__bg__one"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-50.png)"
                                }}
                            />
                            <div
                                className="image__hover__bg__two"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-51.png)"
                                }}
                            />
                            </div>
                            <div className="lower__content__four">
                            <div className="icon__box p_ralative">
                                <div
                                className="icon__hover__bg__one"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-49.png)"
                                }}
                                />
                                <div
                                className="icon__hover__bg__two"
                                style={{
                                    backgroundImage: "url(assets/images/shape/shape-48.png)"
                                }}
                                />
                                <div className="icon__outer">
                                <div className="icon__bg">
                                    <span className="icon-19" />
                                </div>
                                </div>
                            </div>
                            <div className="service__text">
                                <h4>
                                <Link to="/services-details">Venta de grupos electrógenos</Link>
                                </h4>
                                <p>
                                Venta de grupos electrógenos nuevos encapsulados marca GENPEPOWER.
                                </p>
                            </div>
                            {/* <div className="more__btn">
                                <Link to="/services-details">
                                Read More <span className="icon-53" />{" "}
                                <span className="icon-52" />
                                </Link>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-27" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Roofing Layer</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-8" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Damage Repair</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-14" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Roof Cornering</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-31" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Siding Install</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-27" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Roofing Layer</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-8" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Damage Repair</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-14" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Roof Cornering</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide-item">
                <div className="inner__content__four">
                    <div className="service__content__four">
                        <div className="image_layer">
                        <div
                            className="image__hover__bg__one"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-50.png)"
                            }}
                        />
                        <div
                            className="image__hover__bg__two"
                            style={{
                            backgroundImage: "url(assets/images/shape/shape-51.png)"
                            }}
                        />
                        </div>
                        <div className="lower__content__four">
                        <div className="icon__box p_ralative">
                            <div
                            className="icon__hover__bg__one"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-49.png)"
                            }}
                            />
                            <div
                            className="icon__hover__bg__two"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-48.png)"
                            }}
                            />
                            <div className="icon__outer">
                            <div className="icon__bg">
                                <span className="icon-31" />
                            </div>
                            </div>
                        </div>
                        <div className="service__text">
                            <h4>
                            <Link to="/services-details">Siding Install</Link>
                            </h4>
                            <p>
                            Suspendisse varius etiam est tempus nec vitae orci sodales
                            nec at diam in sed.
                            </p>
                        </div>
                        <div className="more__btn">
                            <Link to="/services-details">
                            Read More <span className="icon-53" />{" "}
                            <span className="icon-52" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide> */}
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
