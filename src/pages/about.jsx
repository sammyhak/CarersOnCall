import { useEffect } from "react";
import BigBanner from "../components/pagesComponent/bigBanner";
import banner from "../assets/service-banner.svg";
import FadeInSection from "../hooks/fadeComponent";
import Banner from "../components/pagesComponent/banner";
import QuotationParagraph from "../components/pagesComponent/quotation";
import { useSEO } from "../contexts/SEOcontext";

const About = () => {
  const { setSeoData } = useSEO();

  useEffect(() => {
    setSeoData({
      title: "About Us | Carer OnCall Services",
      description: "A Home Care Services Agency - About Us Page",
      keywords:
        "About Us, About, About Us Page, Health, HealthCare, HealthCare, Old People, Treatment, Services, Home Care, Agency, Carer, Carers",
    });
  }, [setSeoData]);
  return (
    <section className="about">
      <BigBanner backgroundImage={banner} text={"About Us"} />

      <QuotationParagraph
        center={true}
        texts={[
          "Carers OnCall Carers is proudly managed and operated by licensed healthcare professionals in the state of Pennsylvania, ensuring the highest standards of care and expertise.",
          "We are a privately owned, licensed, and insured home health agency dedicated to comprehensive patient care. We understand the importance of seamlessly managing every facet of care, from addressing individual patient needs to aligning with physician recommendations.",
          "That’s why each of our services is overseen by our experienced professionals, ensuring attentive supervision from the initial consultation through to recovery or the completion of treatment.",
        ]}
      />

      <FadeInSection>
        <Banner />
      </FadeInSection>
    </section>
  );
};

export default About;
