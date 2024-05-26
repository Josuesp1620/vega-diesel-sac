import Layout from "@/components/layout/Layout";

import { WhatsAppIcon } from "@/components/elements/whatsapp/WhastAppIcon";
import Banner from "./components/banner";
import RequestService from "./components/request_services";
import About from "./components/about";
import Services from "./components/services";
import ContactHelp from "./components/contact_help";
import HomeSlider from "./components/slider";
import Agreements from "./agreements";
import Brand from "./components/brand";


export const HomePage = () => {
    return (
        <>
            <Layout>
                <Banner />
                <RequestService />
                <About />
                <Services />
                <ContactHelp />
                <HomeSlider />
                {/* <Choose /> */}
                {/* <Testimonial /> */}
                {/* <Faq /> */}
                {/* <Team /> */}                
                <Agreements />
                <Brand />
                {/* <HomeSlider /> */}

                {/* <Features /> */}
                {/* <Blog /> */}
                {/* <News /> */}
                <WhatsAppIcon />
            </Layout>
        </>
    );
}