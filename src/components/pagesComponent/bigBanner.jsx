import "../../styles/components/pagesComponents/bigBanner.scss";

const BigBanner = ({ backgroundImage, text }) => {
  return (
    <section
      className="BigBanner d-flex justify-content-center align-content-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}      
    >
      <div className="banner__text d-flex justify-content-center align-content-center">
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default BigBanner;
