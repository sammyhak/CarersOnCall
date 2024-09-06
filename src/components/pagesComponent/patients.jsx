import "../../styles/components/pagesComponents/patients.scss";
import p1Img from "../../assets/p1.jpeg";
import p2Img from "../../assets/p2.jpg";
import p3Img from "../../assets/p3.jpeg";
import p4Img from "../../assets/p4.jpeg";
import p5Img from "../../assets/p5.jpeg";
import p6Img from "../../assets/p6.jpeg";

const Patients = () => {
  const images = [p1Img, p2Img, p3Img, p4Img, p5Img, p6Img];

  return (
    <>
      <section className="patients container mt-4">
        <h2 className="text-center">Happy Patients</h2>

        <div className="patients__images">
          {images.map((image, index) => {
            return (
              <>
                <div className={`img__card mt-4`}>
                  <img src={image} alt="patient-image" />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Patients;
