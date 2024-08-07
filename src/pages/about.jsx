import BigBanner from "../components/pagesComponent/bigBanner";
import banner from "../assets/service-banner.svg";
import FadeInSection from "../hooks/fadeComponent";
import Banner from "../components/pagesComponent/banner";
import QuotationParagraph from "../components/pagesComponent/quotation";

const About = () => {
  return (
    <section className="about">
      <BigBanner backgroundImage={banner} text={"About Us"} />

      <QuotationParagraph
        center={true}
        texts={[
          "Integer felis lorem, cursus ac leo quis, tristique elementum dolor. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed interdum tincidunt suscipit. Sed sit amet tincidunt libero. Praesent id condimentum lacus. Vivamus congue scelerisque pulvinar.",
          "Integer felis lorem, cursus ac leo quis, tristique elementum dolor. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed interdum tincidunt suscipit. Sed sit amet tincidunt libero. Praesent id condimentum lacus. Vivamus congue scelerisque pulvinar.",
        ]}
      />

      <FadeInSection>
        <Banner />
      </FadeInSection>
    </section>
  );
};

export default About;
