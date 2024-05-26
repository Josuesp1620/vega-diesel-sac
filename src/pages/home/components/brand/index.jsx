import BrandSlider from './BrandSlider'
import './index.css'

export default function Brand() {
    return (
        <>
        {/* brand-section*/}
        <section className="brand__section brand__one see__pad">
            <div className="auto_container">
            <div className="barnd___content">
                <div className="medium-container">
                    <BrandSlider/>
                </div>
            </div>
            </div>
        </section>
        {/* brand-section end */}
        </>
    )
}
