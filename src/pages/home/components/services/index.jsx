
import './index.css'
import CardSlider from './CardSlider'

export default function Services() {
    return (
        <>
        {/* our-service-four */}
        <section
            className="service__four p_relative"
            style={{
            backgroundImage: "url(assets/images/background/background-02.png)"
            }}
        >
            <div className="service__four__content">
            <div className="auto_container">
                <div className="title text-center">
                <div className="sub__title">
                    <h6 className='text-white'>Nuestros servicios</h6>
                </div>
                <div className="main__title">
                    <h2>
                        Estamos brindando <br /> servicios de grupos electrógenos de calidad
                    </h2>
                </div>
                </div>
                <div className="service__four__slider">
                    <CardSlider />
                </div>
            </div>
            </div>
        </section>
        {/* our-service-four-end */}
        </>
    )
}
