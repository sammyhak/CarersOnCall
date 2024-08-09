import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import peopleImage from "../assets/people.svg";
import MakeAppointmentButton from "../components/buttons/appointment";
import calenderIcon from "../assets/icons/Calendar.svg";
import healthIcon from "../assets/icons/health.svg";
import messageIcon from "../assets/icons/Message.svg";
import userIcon from "../assets/icons/User.svg";
import "../styles/pages/home.scss";
import Services from "../components/pagesComponent/services";
import Why from "../components/pagesComponent/why";
import Staffs from "../components/pagesComponent/staffs";
import FadeInSection from "../hooks/fadeComponent";
import Banner from "../components/pagesComponent/banner";
import AppointmentForm from "../components/pagesComponent/appointment";
import { useSEO } from "../contexts/SEOcontext";

const Home = () => {
  const { setSeoData } = useSEO();

  useEffect(() => {
    setSeoData({
      title: "Carer OnCall Services LLC",
      description: "A Home Care Services Agency - Home Page",
      keywords:
        "Home, Home Page, Health, HealthCare, HealthCare, Old People, Treatment, Services, Home Care, Agency, Carer, Carers",
    });
  }, [setSeoData]);

  const location = useLocation();

  const servicesRef = useRef(null);

  // Define a function to scroll the element into view
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const appointmentRef = useRef(null);

  // Define a function to scroll the element into view
  const scrollToAppointment = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (location.hash.includes("#services")) {
      scrollToServices();
    } else if (location.hash.includes("#appointment")) {
      scrollToAppointment();
    }
  }, [location]);
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row mt-4">
            <div className="content__one col-md-12 col-lg-6">
              <h1>Welcome to Carers OnCall</h1>

              <p className="text-left about__content">
                At Carers, we are dedicated to providing compassionate,
                professional home care services tailored to meet the unique
                needs of your loved ones. Our mission is to ensure comfort,
                safety, and independence in the familiar surroundings of home.
              </p>

              <div className="notice__board mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="content flex">
                      <img
                        src={calenderIcon}
                        alt="calender Icon"
                        loading="lazy"
                      />
                      <div className="text">
                        <h6>Make an Appointment</h6>
                        <p>Select best time for you.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="content flex">
                      <img src={userIcon} alt="calender Icon" />
                      <div className="text">
                        <h6>Find the Best Caregivers</h6>
                        <p>find the best Caregivers in a minute</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="content flex">
                      <img src={healthIcon} alt="calender Icon" />
                      <div className="text">
                        <h6>Personal Care</h6>
                        <p>Assistance with daily activities</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="content flex">
                      <img src={messageIcon} alt="calender Icon" />
                      <div className="text">
                        <h6>Ask Questions</h6>
                        <p>Ask questions any time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 align-content-center">
                  <MakeAppointmentButton showIcon={true} />
                </div>
                <div className="col-md-6 align-content-center">
                  <p className="appointment__time">
                    Mon-Fri <span className="time">10AM-9PM</span>
                  </p>
                  <p className="appointment__time">
                    Sat <span className="time">10AM-2PM</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="content__two col-md-12 col-lg-6 align-content-center d-none d-lg-block">
              <img src={peopleImage} alt="" />
            </div>
          </div>
        </div>

        <FadeInSection>
          <div className="container" ref={servicesRef}>
            <Services />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="container">
            <Why />
          </div>
        </FadeInSection>

        <FadeInSection>
          <Staffs />
        </FadeInSection>

        <FadeInSection>
          <Banner />
        </FadeInSection>

        <div ref={appointmentRef}>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
};

export default Home;
