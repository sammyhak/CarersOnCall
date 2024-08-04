import "../../styles/components/pagesComponents/why.scss";
import dna from "../../assets/dna.svg";

const Why = () => {
  return (
    <>
      <section className="why__us">
        <div className="why__us__header d-flex">
          <h2 className="why__us__title">Why Us</h2>
        </div>
        <div className={`why__us__content__container row`}>
          <div className="onCall__card p-3 col-lg-4">
            <div className="img__icon mt-4">
              <img src={dna} alt="why_us_image" />
            </div>
            <h6 className="mt-4">Insurance</h6>

            <p>We are proud to lorem ipsum.... bla bla bla bla</p>
          </div>

          <div className="onCall__card p-3 col-lg-4">
            <div className="img__icon mt-4">
              <img src={dna} alt="why_us_image" />
            </div>
            <h6 className="mt-4">Insurance</h6>

            <p>We are proud to lorem ipsum.... bla bla bla bla</p>
          </div>

          <div className="onCall__card p-3 col-lg-4">
            <div className="img__icon mt-4">
              <img src={dna} alt="why_us_image" />
            </div>
            <h6 className="mt-4">Insurance</h6>

            <p>We are proud to lorem ipsum.... bla bla bla bla</p>
          </div>

          <div className="onCall__card p-3 col-lg-4">
            <div className="img__icon mt-4">
              <img src={dna} alt="why_us_image" />
            </div>
            <h6 className="mt-4">Insurance</h6>

            <p>We are proud to lorem ipsum.... bla bla bla bla</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
