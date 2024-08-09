import { useEffect, useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../../styles/components/main/header.scss";
import MakeAppointmentButton from "../buttons/appointment";
import OnCallLogo from "../../assets/CarersOncallLogo.svg";
import Line from "../../assets/icons/Line.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";
import RoutesMain from "../../router/routes";
import HandleResize from "../../hooks/handleResize";

const Header = () => {
  const currentPage = useLocation();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const getScreenSize = HandleResize();


  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust the scroll value as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    }
  }, [showMobileNav]);

  const NavLinks = () => {
    return (
      <Nav className="nav d-sm-block d-md-flex">
        {RoutesMain().map((route, index) => {
          return (
            <span key={index}>
              <NavItem>
                {currentPage.pathname === route.path &&
                  getScreenSize <= 768 && <img src={Line} alt={route.name} />}
                <Link
                  onClick={() => setShowMobileNav(false)}
                  to={route.path}
                  className={
                    currentPage.pathname === route.path ? "active" : ""
                  }
                >
                  {route.name}
                </Link>
              </NavItem>
            </span>
          );
        })}
      </Nav>
    );
  };

  return (
    <>
      <div
        className={`onCallHeader ${scrolled && "scrolling"} ${getScreenSize > 768 && "container"} p-3 ${
          showMobileNav ? "showMobileNav" : "container"
        }`}
      >
        <div className="onCallHeader__logo">
          <img src={OnCallLogo} alt="logo" />
        </div>

        <div
          className="mobileHamburger"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <img src={showMobileNav ? close : hamburger} alt="hamburger" />
        </div>

        {/* show links for mobile */}
        {getScreenSize <= 768 && showMobileNav && <NavLinks />}

        {/* show links for desktop*/}
        {getScreenSize > 768 && <NavLinks />}

        {getScreenSize > 768 && <MakeAppointmentButton />}
      </div>
    </>
  );
};

export default Header;
