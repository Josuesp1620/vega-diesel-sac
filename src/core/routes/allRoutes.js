import IconList from "@/components/elements/IconGeneratos";
import { AboutUsPage } from "@/pages/about_us";
import { ContactPage } from "@/pages/contact";
import { GalleryPage } from "@/pages/gallery";
import { HomePage } from "@/pages/home";
import { ServicesPage } from "@/pages/services";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/icons", component: IconList },
  { path: "/about", component: AboutUsPage },
  { path: "/services", component: ServicesPage },
  { path: "/contact", component: ContactPage },
  { path: "/gallery", component: GalleryPage },
]

export { publicRoutes };
