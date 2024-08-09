import "../../styles/components/pagesComponents/why.scss";
import nebulas from "../../assets/icons/nebulas.svg";
import { useState } from "react";

const Why = () => {
  const [Data] = useState([
    {
      img: nebulas,
      title: "Comprehensive Services",
      text: "Our wide range of services includes personal care, medical assistance, companionship, and more. Whether you need short-term support or long-term care, we offer flexible solutions to meet various needs, ensuring all aspects of your care are handled with utmost professionalism.",
    },
    {
      img: nebulas,
      title: "Family-Centered Care",
      text: "We recognize the importance of family involvement in care decisions. We work closely with families to ensure that their loved ones receive care that aligns with their preferences and values. Open communication and transparency are key to our approach, keeping families informed and involved every step of the way.",
    },
    {
      img: nebulas,
      title: "24/7 Availability",
      text: "Care needs don’t adhere to a 9-to-5 schedule, and neither do we. Our services are available around the clock, ensuring that help is always at hand whenever it’s needed. Whether it’s during the day or late at night, we are here to provide support.",
    },
    {
      img: nebulas,
      title: "Safe and Reliable",
      text: "Safety is paramount in caregiving. We adhere to strict safety protocols and background checks to ensure that our carers provide a secure and reliable service. Our comprehensive approach ensures peace of mind for both clients and their families.",
    },

    {
      img: nebulas,
      title: "Proven Track Record",
      text: "With years of experience and a track record of satisfied clients, we take pride in our reputation for delivering exceptional care. Our testimonials and case studies reflect the positive impact we’ve had on countless lives.",
    },

    {
      img: nebulas,
      title: "Dedicated Support Team",
      text: "Our support team is always available to address any questions or concerns. We are committed to providing excellent customer service and ensuring that your experience with us is smooth and stress-free.",
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
                className={`onCall__card p-3 ${
                  index === 1 && "onCall__Card__Shadow"
                }`}
              >
                <div className="img__icon mt-4">
                  {data.img && <img src={data.img} alt="why_us_image" />}
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
