// import TestimonialSlider5 from '@/components/slider/TestimonialSlider5'
import CounterUp from '@/components/elements/counter/CounterUp'
import Slider from '@/components/layout/slider/slider'
import { ContactComponent } from '@/pages/contact/components/contact'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AboutUsComponent() {
   
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
                <div>
                
                {/* about-section-three */}
                <section className="about__section__three see__pad">
                    <div className="about__three">
                    <div className="auto_container">
                        <div className="row">
                        <div className="col-lg-6 col-md-12 pe-lg-5">
                            <div className="about__three__left">
                            <div className="title">
                                <div className="sub__title">
                                <h6>About Rooftox</h6>
                                </div>
                                <div className="main__title">
                                <h2>
                                    Experienced &amp; <br />
                                    Quality More Than <br />
                                    30 Years
                                </h2>
                                </div>
                            </div>
                            <div className="normal__text">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Adipiscing integer ultrices suspendisse varius etiam est. Est,
                                felis, tempus nec vitae orci sodales Metus, velit nec at diam
                                in sed. Massa dui ipsum ornare sagittis dolor sagittis amet
                                odio est. Sit semper et velit fusce.
                                </p>
                            </div>
                            <div className="engineer__section">
                                <div className="row">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="engineer__content">
                                    <div className="engineer__content__list">
                                        <ul>
                                        <li>
                                            <span className="icon-21" /> Innovative Work
                                            Experience
                                        </li>
                                        <li>
                                            <span className="icon-21" /> 100% Satisfaction
                                            Guarantee
                                        </li>
                                        <li>
                                            <span className="icon-21" /> Quality Expert Engineer
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="engineer__content">
                                    <div className="engineer__content__list">
                                        <ul>
                                        <li>
                                            <span className="icon-21" /> Certified Company
                                        </li>
                                        <li>
                                            <span className="icon-21" /> Roof Renovation
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="about__btn">
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
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p_relative ps-lg-5">
                            <div className="about__three__right">
                            <div className="anim-icon">
                                <div className="parallax-scene parallax-scene-7">
                                <div
                                    data-depth="0.30"
                                    className="icon layer-bg"
                                    style={{
                                    backgroundImage: "url(assets/images/icons/icon-02.svg)"
                                    }}
                                />
                                </div>
                            </div>
                            <div className="one__img">
                                <div className="inner_box">
                                <div className="image_box">
                                    <figure
                                    className="image wow zoomIn animated"
                                    data-wow-delay="00ms"
                                    data-wow-duration="1500ms"
                                    >
                                    <img
                                        src="assets/images/resource/about-three-01.png"
                                        alt=""
                                    />
                                    </figure>
                                </div>
                                </div>
                            </div>
                            <div className="two__img p_absolute">
                                <img src="assets/images/resource/about-three-02.png" alt="" />
                            </div>
                            <div
                                className="about__two__expericence"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-42.png)"
                                }}
                            >
                                <div className="about__two__text">
                                <h2>20 </h2>
                                <span>Years of Expericence</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* about-section-three-end */}               
                
                {/* funfact-section */}
                <section className="funfact__section three p_relative mb-20">
                    <div className="funfact__content">
                    <div className="auto_container">
                        <div className="row">
                        <div
                            className=" col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="inner_box">
                            <div className="icon__image">
                                <span className="icon-8" />
                            </div>
                            <div className="funfact__text">
                                <div className="count-outer count-box">
                                <CounterUp end={932} />
                                <span>+</span>
                                </div>
                                <p>Project Complete</p>
                            </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                            data-wow-delay="100ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="inner_box">
                            <div className="icon__image">
                                <span className="icon-7" />
                            </div>
                            <div className="funfact__text">
                                <div className="count-outer count-box">
                                <CounterUp end={90} />
                                <span>+</span>
                                </div>
                                <p>Experience Staff</p>
                            </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="inner_box">
                            <div className="icon__image">
                                <span className="icon-9" />
                            </div>
                            <div className="funfact__text">
                                <div className="count-outer count-box">
                                <CounterUp end={20} />
                                <span>+</span>
                                </div>
                                <p>Awards Win</p>
                            </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3  col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="inner_box">
                            <div className="icon__image">
                                <span className="icon-10" />
                            </div>
                            <div className="funfact__text">
                                <div className="count-outer count-box">
                                <CounterUp end={620} />
                                <span>+</span>
                                </div>
                                <p>Satisfied Clients</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* funfact-section-end */}

                <Slider />            
         
                <ContactComponent />



                </div>
        </>
    )
}