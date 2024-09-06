import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Mock from "../pages/mock";

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
      component: Contact,
      name: "Contact Us",
      description: "Contact",
    },
    {
      path: "/spiidpay",
      component: Mock,
      name: "SpiidPay",
      description: "Mock Up",
    },

  ];
}
