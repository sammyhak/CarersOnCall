import { useNavigate } from "react-router-dom";
import "../../styles/components/buttons/appointment.scss";
import ArrowRight from "../../assets/icons/Arrow - Right.svg";

const MakeAppointmentButton = ({ showIcon }) => {
  const navigate = useNavigate();

  const goToAppointment = () => {
    navigate("/#appointment");
  };
  return (
    <>
      <div
        className={`
            book__appointment__btn 
            ${showIcon ? "d-flex shadow" : "d-none d-md-flex"}             
        `}
        onClick={goToAppointment}
      >
        Make Appointment{" "}
        {showIcon && (
          <img
            src={ArrowRight}
            style={{ marginLeft: "5px" }}
            alt="Arrow Right"
          />
        )}
      </div>
    </>
  );
};

export default MakeAppointmentButton;
