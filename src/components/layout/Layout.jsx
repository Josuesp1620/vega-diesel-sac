
import { useState } from "react"
import Breadcrumb from './breadcrumb'
import SearchPopup from './search'
import Footer2 from './footer'
import Header4 from './header'
import 'swiper/css'

export default function Layout({ children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    return (
        <>
            <div className={`boxed_wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />


                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />                

                {children}

                <Footer2 />
            </div>
        </>
    )
}
