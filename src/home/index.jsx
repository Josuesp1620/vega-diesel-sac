import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/Services";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import ServiceFour from "@/components/sections/ServiceFour";

export const HomePage = () => {
    return (
        <>
            <Layout>
                <Banner />
                <Services />
                <About />
                <ServiceFour />
                {/* <Choose />
                <Testimonial />
                <Faq />
                <Team />
                <Brand />
                <Funfact />
                <Blog />
                <News /> */}
            </Layout>
        </>
    );
}