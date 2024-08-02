import prevButton from "../../assets/icons/backArrow.svg";
import nextButton from "../../assets/icons/forwardArrow.svg";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import "../../styles/components/pagesComponents/services.scss";

const Services = () => {
  const servicesList = [
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
      text: "Health Monitoring",
    },

    {
      img: service3,
      text: "Health Monitoring",
    },

    {
      img: service3,
      text: "Health Monitoring",
    },
  ];
  return (
    <>
      <section className="services">
        <div className="services__header d-flex">
          <h2 className="services__title">Our Services</h2>

          <div className="controls d-flex">
            <span className="controls__prev disabled">
              <img src={prevButton} alt="prev" />
            </span>

            <span className="controls__next">
              <img src={nextButton} alt="next" />
            </span>
          </div>
        </div>

        <div className="services__content__container row">
          {servicesList.map((service, index) => {
            return (
              <div className="services__content col-lg-4 col-md-6 col-sm-12">
                <img src={service.img} alt="service image" />

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
