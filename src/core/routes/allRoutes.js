import IconList from "@/components/elements/IconGeneratos";
import { ContactPage } from "@/contact";
import { HomePage } from "@/home";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/icons", component: IconList },
  { path: "/contact", component: ContactPage },

]

export { publicRoutes };
