import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/Services";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import ServiceFour from "@/components/sections/ServiceFour";
import Brand from "@/components/sections/Brand";
import Funfact  from "@/components/sections/Funfact";
import { WhatsAppIcon } from "@/components/elements/whatsapp/WhastAppIcon";

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