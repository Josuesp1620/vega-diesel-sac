import IconList from "@/components/elements/IconGeneratos";
import { ContactPage } from "@/pages/contact";
import { GalleryPage } from "@/pages/gallery";
import { HomePage } from "@/pages/home";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/icons", component: IconList },
  { path: "/contact", component: ContactPage },
  { path: "/gallery", component: GalleryPage },
]

export { publicRoutes };
