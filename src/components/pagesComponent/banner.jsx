import { useEffect, useState } from "react";
import "../../styles/components/pagesComponents/banner.scss";

const Banner = () => {
  const [feedback, setFeedback] = useState(0);
  const [clients, setClients] = useState(0);
  const [staffs, setStaffs] = useState(0);

  // Function to handle counter-up effect
  const startCounter = (current, max, setState) => {
    const interval = setInterval(() => {
      if (current <= max) {
        setState(current++);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the interval time as needed
  };

  useEffect(() => {
    startCounter(feedback, 99, setFeedback);
    startCounter(clients, 150, setClients);
    startCounter(staffs, 75, setStaffs);
  }, []); // Empty dependency array to start the effect only once

  return (
    <section className="banner mt-4">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-4 justify-content-center align-content-center">
            <h2 className="title">{feedback}%</h2>

            <p>Positive Feedback</p>
          </div>

          <div className="col-lg-4 justify-content-center align-content-center">
            <h2 className="title">{clients}+</h2>

            <p>Happy Clients</p>
          </div>

          <div className="col-lg-4 justify-content-center align-content-center">
            <h2 className="title">{staffs}</h2>

            <p>Professional Staffs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
