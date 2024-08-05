import "../../styles/components/pagesComponents/staffs.scss";
import staff from "../../assets/staff.svg";
import { useState } from "react";

const Staffs = () => {
  const [Data] = useState([
    {
      img: staff,
      title: "Dr. Jane Nicholson",
      text: "Leading Diagnostic Doctor",
    },
    {
      img: staff,
      title: "Dr. Jane Nicholson",
      text: "Leading Diagnostic Doctor",
    },
    {
      img: "",
      title: "Dr. Jane Nicholson",
      text: "Leading Diagnostic Doctor",
    },
    {
      img: "",
      title: "Dr. Jane Nicholson",
      text: "Leading Diagnostic Doctor",
    },
  ]);

  return (
    <>
      <section className="staffs">
        <div className="container p-4">
          <div className="staffs__header d-flex">
            <h2 className="staffs__title">Our Qualified Staffs</h2>
          </div>
          <div className={`staffs__content__container onCall__Card__Container`}>
            {Data.map((data, index) => {
              return (
                <div key={index} className="onCall__card p-4 mt-3">
                  <div className="img__icon mt-4">
                    <img src={data.img} alt="why_us_image" />
                  </div>
                  <h6 className="mt-4">{data.title}</h6>

                  <p>{data.text}</p>

                  <p className="special">+500 Happy patients</p>

                  <p className="mt-4">
                    iMedical Central Clinic, LA
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Staffs;
