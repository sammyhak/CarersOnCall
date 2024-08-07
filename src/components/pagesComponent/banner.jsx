import "../../styles/components/pagesComponents/banner.scss";

const Banner = () => {
  return (
    <section className="banner mt-4">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-4 justify-content-center align-content-center">
            <h2 className="title">99%</h2>

            <p>Positive Feedback</p>
          </div>

          <div className="col-lg-4 justify-content-center align-content-center">
            <h2 className="title">2,300+</h2>

            <p>Happy Clients</p>
          </div>

          <div className="col-lg-4 justify-content-center align-content-center">
            <h2 className="title">43</h2>

            <p>Professional Staffs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
