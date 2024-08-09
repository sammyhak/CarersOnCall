import { useEffect, useState } from "react";
import prevButton from "../../assets/icons/backArrow.svg";
import nextButton from "../../assets/icons/forwardArrow.svg";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import "../../styles/components/pagesComponents/services.scss";
import HandleResize from "../../hooks/handleResize";

const Services = () => {
  const [itemsToDisplay, setitemsToDisplay] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItemsToDisplay, settotalItemsToDisplay] = useState(0);
  const [slideIn, setSlideIn] = useState(false);

  const getScreenSize = HandleResize();

  useEffect(() => {
    setitemsToDisplay(3);
    settotalItemsToDisplay(3);
    if (getScreenSize <= 768) {
      setitemsToDisplay(1);
      settotalItemsToDisplay(1);
    } else if (getScreenSize <= 992) {
      setitemsToDisplay(2);
      settotalItemsToDisplay(2);
    }
  }, [getScreenSize]);

  const handlePrev = () => {
    if (currentIndex >= itemsToDisplay) {
      setCurrentIndex(currentIndex - itemsToDisplay);
      settotalItemsToDisplay(totalItemsToDisplay - itemsToDisplay);
      setSlideIn(false);

      setTimeout(() => {
        setSlideIn(true);
      }, 100);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (totalItemsToDisplay < servicesList.length) {
      setCurrentIndex(itemsToDisplay + currentIndex);
      settotalItemsToDisplay(totalItemsToDisplay + itemsToDisplay);
      setSlideIn(false);

      setTimeout(() => {
        setSlideIn(true);
      }, 100);
    }
  };

  useEffect(() => {
    !slideIn && setSlideIn(true);
  }, []);

  const [servicesList] = useState([
    {
      img: service1,
      text: "Personal Care",
    },

    {
      img: service2,
      text: "Companionship",
    },

    {
      img: service3,
      text: "Health Monitoring",
    },

    {
      img: service3,
      text: "Nursing Services",
    },

    {
      img: service3,
      text: "Pediatric Nursing Services",
    },
    {
      img: service3,
      text: "Therapy Services",
    },
  ]);

  const [slicedServicesList, setSlicedServiceList] = useState([]);

  useEffect(() => {
    setSlicedServiceList(servicesList.slice(currentIndex, totalItemsToDisplay));
  }, [itemsToDisplay, totalItemsToDisplay, currentIndex]);

  return (
    <>
      <section className="services" id="services">
        <div className="services__header d-flex">
          <h2 className="services__title">Our Services</h2>

          <div className="controls d-flex">
            <span
              className={`controls__prev ${currentIndex === 0 && "disabled"}`}
              onClick={handlePrev}
            >
              <img src={prevButton} alt="prev" />
            </span>

            <span
              className={`controls__next ${
                totalItemsToDisplay >= servicesList.length && "disabled"
              }`}
              onClick={handleNext}
            >
              <img src={nextButton} alt="next" />
            </span>
          </div>
        </div>
        <div
          className={`services__content__container row ${slideIn && "slideIn"}`}
        >
          {slicedServicesList.length > 0 &&
            slicedServicesList.map((service, index) => {
              return (
                <div
                  key={index}
                  className="services__content col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="services__content_img">
                    <img src={service.img} alt="service image" loading="lazy" />
                  </div>

                  <h6>{service.text}</h6>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Services;
