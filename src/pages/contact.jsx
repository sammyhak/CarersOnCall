import BigBanner from "../components/pagesComponent/bigBanner";
import banner from "../assets/2-persons.svg";
import FadeInSection from "../hooks/fadeComponent";
import AppointmentForm from "../components/pagesComponent/appointment";

const Contact = () => {
  return (
    <section className="contact">
      <BigBanner backgroundImage={banner} />

      <FadeInSection>
        <AppointmentForm headerText={"Contact us"}/>
      </FadeInSection>
    </section>
  );
};

export default Contact;
