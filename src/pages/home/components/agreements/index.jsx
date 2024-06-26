import SliderAgreements from "./slider";

export default function Agreements() {
    return (
        <>
  {/* testimonials-section */}
  <section className="testimonials__section p_relative see__pad">
    <div className="anim-icon">
      <div className="parallax-scene parallax-scene-3 ">
        <div
          data-depth="0.30"
          className="icon layer-bg"
          style={{ backgroundImage: "url(assets/images/icons/icon-01.svg)" }}
        />
      </div>
      <div
        className="icon icon-03 wow zoomIn animated"
        data-wow-delay="100ms"
        data-wow-duration="1500ms"
        style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}
      />
    </div>
    <div className="auto_container">
      <div className="testimonials__content p_relative">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="testimonials__content__one">
              <div className="title">
                {/* <div className="sub__title">
                  <h6>Testimonials</h6>
                </div> */}
                <div className="main__title">
                  <h2>
                  Contáctanos

                  </h2>
                </div>
              </div>
              <div className="testimonials__text">
                <p>
                Cualquier duda, reclamo o acto no apropiado, 
                favor escribir al correo: vegadiesel@vegadiesel.com
                </p>
              </div>
              <div className="slider_dots">
                <div className="slider_control">
                  <div className="slider__pagination" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <div className="testimonials__middle">
              <div
                className="image__layer"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-21.png)"
                }}
              />
              <SliderAgreements />
            </div>
          </div>
        </div>
        <div
          className="test__right__image wow slideInUp animated"
          data-wow-delay="100ms"
          data-wow-duration="1500ms"
        >
          <figure className="image">
            <img src="assets/images/resource/testimonial.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  {/* testimonials-section-end */}
</>
    )
}
