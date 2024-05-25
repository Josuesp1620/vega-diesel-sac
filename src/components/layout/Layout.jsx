
import { useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import Breadcrumb from './Breadcrumb'
import SearchPopup from './SearchPopup'
import Sidebar from './Sidebar'
import Footer2 from './footer/Footer2'
import Header4 from './header/Header4'
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

    // useEffect(() => {
    //     const WOW = require('wowjs')
    //     window.wow = new WOW.WOW({
    //         live: false
    //     })
    //     window.wow.init()

    //     document.addEventListener("scroll", () => {
    //         const scrollCheck = window.scrollY > 100
    //         if (scrollCheck !== scroll) {
    //             setScroll(scrollCheck)
    //         }
    //     })
    // }, [])
    return (
        <>
            <DataBg />
            <div className={`boxed_wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />


                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                <Footer2 />
            </div>
            {/* <BackToTop scroll={scroll} /> */}
        </>
    )
}
