import "../../styles/components/buttons/appointment.scss";
import ArrowRight from "../../assets/icons/Arrow - Right.svg";

const MakeAppointmentButton = ({ showIcon }) => {
  return (
    <>
      <div
        className={`
            book__appointment__btn 
            ${showIcon ? "d-flex" : "d-none d-md-flex"} 
            ${showIcon && "shadow"}
        `}
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
