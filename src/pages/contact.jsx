import { useEffect } from "react";
import { useSEO } from "../contexts/SEOcontext";
import BigBanner from "../components/pagesComponent/bigBanner";
import banner from "../assets/2-persons.svg";
import FadeInSection from "../hooks/fadeComponent";
import AppointmentForm from "../components/pagesComponent/appointment";


const Contact = () => {
  const { setSeoData } = useSEO();

  useEffect(() => {
    setSeoData({
      title: " Contact Us | Carer OnCall Services",
      description: "A Home Care Services Agency - Contact Us Page",
      keywords:
        "Contact Us, Contact, Contact Us Page, Health, HealthCare, HealthCare, Old People, Treatment, Services, Home Care, Agency, Carer, Carers",
    });
  }, [setSeoData]);

  return (
    <section className="contact">
      <BigBanner backgroundImage={banner} />

      <FadeInSection>
        <AppointmentForm headerText={"Contact us"} />
      </FadeInSection>
    </section>
  );
};

export default Contact;
