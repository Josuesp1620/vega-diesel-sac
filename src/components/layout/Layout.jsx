
import { useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import Breadcrumb from './breadcrumb'
import SearchPopup from './search'
import Sidebar from './Sidebar'
import Footer2 from './footer'
import Header4 from './header'
import 'swiper/css'

export default function Layout({ breadcrumbTitle, children, wrapperCls }) {
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


                {/* <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} /> */}
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                <Footer2 />
            </div>
            {/* <BackToTop scroll={scroll} /> */}
        </>
    )
}
