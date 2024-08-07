import BigBanner from "../components/pagesComponent/bigBanner";
import banner from "../assets/service-banner.svg";
import FadeInSection from "../hooks/fadeComponent";
import Banner from "../components/pagesComponent/banner";
import QuotationParagraph from "../components/pagesComponent/quotation";

const About = () => {
  return (
    <section className="about">
      <BigBanner backgroundImage={banner} text={"About Us"} />

      <QuotationParagraph />

      <FadeInSection>
        <Banner />
      </FadeInSection>
    </section>
  );
};

export default About;
