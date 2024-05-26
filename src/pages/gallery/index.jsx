import Layout from "@/components/layout/Layout"
import GalleryFilter from "@/pages/gallery/components/gallery"

export const GalleryPage = () => {
    return (
        <Layout breadcrumbTitle="Galeria">
                
            {/* portfolio-section */}
            <section className="portfolio style__one two see__pad p_relative ">
                <div className="auto_container">
                <div className="sortable-masonry">
                    <GalleryFilter />
                </div>
                </div>
            </section>
            {/* project-style-1 */}

        </Layout>
    )
}