import Layout from "@/components/layout/Layout";
import { ContactComponent } from "./components/contact";

export const ContactPage = () => {
    return (
        <Layout breadcrumbTitle={'Contacto'}>
            <ContactComponent />
        </Layout>
    );
}