import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/services";
import Banner from "@/components/sections/banner";
import About from "@/components/sections/about";
import ServiceFour from "@/components/sections/service_four";
import Brand from "@/components/sections/brand";
import Funfact  from "@/components/sections/funfact";
import { WhatsAppIcon } from "@/components/elements/whatsapp/WhastAppIcon";
import Gallery from "@/components/sections/gallery";

export const HomePage = () => {
    return (
        <>
            <Layout>
                <Banner />
                <Services />
                <About />
                <ServiceFour />
                {/* <Choose /> */}
                {/* <Testimonial /> */}
                {/* <Faq /> */}
                {/* <Team /> */}
                <Brand />
                {/* <Funfact /> */}
                {/* <Blog /> */}
                {/* <News /> */}
                <WhatsAppIcon />
            </Layout>
        </>
    );
}