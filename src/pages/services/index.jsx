import Layout from "@/components/layout/Layout";
import Services from "./components/services";
import HomeSlider from "@/components/layout/slider";
import { ContactComponent } from "../contact/components/contact";

export const ServicesPage = () => {
    return (
        <Layout>
            <Services />
            <HomeSlider />
            <HomeSlider />
            <ContactComponent />
        </Layout>
    );
}