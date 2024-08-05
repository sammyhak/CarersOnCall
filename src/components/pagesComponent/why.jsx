import "../../styles/components/pagesComponents/why.scss";
import dna from "../../assets/dna.svg";
import { useState } from "react";

const Why = () => {
  const [Data] = useState([
    {
      img: dna,
      title: "Insurance",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
    {
      img: dna,
      title: "Insurance",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
    {
      img: "",
      title: "Insurance",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
    {
      img: "",
      title: "Insurance",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    },
  ]);

  return (
    <>
      <section className="why__us">
        <div className="why__us__header d-flex">
          <h2 className="why__us__title">Why Us</h2>
        </div>
        <div className={`why__us__content__container onCall__Card__Container`}>
          {Data.map((data, index) => {
            return (
              <div
                key={index}
                className={`onCall__card p-3 ${index === 1 && "onCall__Card__Shadow"}`}
              >
                <div className="img__icon mt-4">
                  <img src={data.img} alt="why_us_image" />
                </div>
                <h6 className="mt-4">{data.title}</h6>

                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Why;
