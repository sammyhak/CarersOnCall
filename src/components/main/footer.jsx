import { Link } from "react-router-dom";
import OnCallLogo from "../../assets/CarersOncallLogo.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import "../../styles/components/main/footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer mt-5">
        <div className="footer__container container p-4">
          <div className="row">
            <div className="footer__column col-md-12 col-lg-3">
              <div className="footer__logo">
                <img src={OnCallLogo} alt="onCallLogo" />
              </div>

              <div className="footer__address mt-3">
                <p>675 E STREET ROAD APT 1306 WARMINSTER, PA 18974</p>
              </div>

              <h6 className="footer__phone">Call: (908) 875-5560</h6>
              <h6 className="footer__phone">
                <a href="mailto:health@carersoncall.com">
                  Email: health@carersoncall.com
                </a>
              </h6>

              <div className="social__links d-flex">
                <span className="social">
                  <img src={facebookIcon} alt="facebook" />
                </span>
                <span className="social">
                  <img src={twitterIcon} alt="twitter" />
                </span>
              </div>
            </div>

            <div className="footer__column col-md-12 col-lg-3 mt-2">
              <div className="footer__title">
                <h5>Explore</h5>
              </div>

              <div className="footer__links mt-3 row">
                <span className="footer__link mt-3">
                  <Link to="/#services">Our Services</Link>
                </span>

                <span className="footer__link mt-3">
                  <Link to="/about">About Us</Link>
                </span>

                {/* <span className="footer__link mt-3">
                  <Link>FAQs</Link>
                </span> */}

                <span className="footer__link mt-3">
                  <Link to="contact">Contact</Link>
                </span>
              </div>
            </div>

            <div className="footer__column col-md-12 col-lg-3 mt-2">
              <div className="footer__title">
                <h5>Legal</h5>
              </div>

              <div className="footer__links mt-3 row">
                <span className="footer__link mt-3">
                  <Link>Privacy Policy</Link>
                </span>

                <span className="footer__link mt-3">
                  <Link>Terms of Services</Link>
                </span>

                {/* <span className="footer__link mt-3">
                  <Link>Documentations</Link>
                </span>

                <span className="footer__link mt-3">
                  <Link>Help Center</Link>
                </span> */}
              </div>
            </div>

            <div className="footer__column col-md-12 col-lg-3 mt-2">
              <div className="footer__title">
                <h5>Subscribe</h5>
              </div>

              <div className="footer__links mt-3 row">
                <span
                  className="footer__link mt-3 col-md-12"
                  style={{ maxWidth: "238px" }}
                >
                  Subscribe to get the latest news from us
                </span>

                <div className="footer__subscribeNewsLetter d-flex mt-3">
                  <input
                    type="text"
                    name="subscribeNewsLetter"
                    placeholder="your email"
                  />
                  <div className="subscribeNewsLetter__btn">Subscribe</div>
                </div>
              </div>
            </div>

            <hr className="mt-3" />

            <div className="footer__copyright mt-2 d-grid d-md-flex">
              <p>
                © {new Date(Date.now()).getFullYear()} onCallCarers, All rights
                reserved.
              </p>

              <div className="links">
                <span>
                  <Link>Privacy Policy</Link>
                </span>
                <span>
                  <Link>Terms of Services</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
