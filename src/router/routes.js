import About from "../pages/about";
import Home from "../pages/home";

export default function RoutesMain() {
  return [
    {
      path: "/",
      component: Home,
      name: "Home",
      description: "Home Page",
    },
    {
      path: "/#services",
      component: "",
      name: "Our Services",
      description: "Our Company services",
    },    
    {
      path: "/about",
      component: About,
      name: "About Us",
      description: "About Page",
    },
     {
      path: "/contact",
      component: "",
      name: "Contact Us",
      description: "Contact",
    },
  ];
}
