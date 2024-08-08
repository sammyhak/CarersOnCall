import { useRef, useState } from "react";
import "../../styles/components/pagesComponents/appointment.scss";
import calendar from "../../assets/icons/Calendar-form.svg";
import time from "../../assets/icons/Time-form.svg";
import send from "../../assets/icons/Send.svg";

const AppointmentForm = ({headerText}) => {
  // Create a ref to hold the reference to the date input
  const dateInputRef = useRef(null);

  // Define a function to handle the click event
  const handleClick = () => {
    if (dateInputRef.current) {
      // Access the date input element using the ref
      // For example, focus on the input element
      dateInputRef.current.focus();
      dateInputRef.current.click();
      alert(`Date input clicked: ${dateInputRef.current.value}`);
    }
  };
  const [inputs] = useState([
    {
      name: "firstname",
      value: "",
      icon: "",
      type: "text",
      placeholder: "First Name",
      required: false,
    },
    {
      name: "lastname",
      value: "",
      icon: "",
      type: "text",
      placeholder: "Last Name",
      required: false,
    },
    {
      name: "email",
      value: "",
      icon: "",
      type: "text",
      placeholder: "Email",
      required: false,
    },
    {
      name: "phone",
      value: "",
      icon: "",
      type: "text",
      placeholder: "Phone",
      required: false,
    },
    // {
    //   name: "date",
    //   value: "",
    //   icon: calendar,
    //   type: "date",
    //   placeholder: "Appointment Date",
    //   required: false,
    //   ref: dateInputRef,
    // },
    // {
    //   name: "time",
    //   value: "",
    //   icon: time,
    //   type: "time",
    //   placeholder: "Appointment Date",
    //   required: false,
    // },
    {
      name: "message",
      value: "",
      icon: "",
      type: "textarea",
      placeholder: "Describe what you’re looking for...",
      required: false,
    },
  ]);

  return (
    <section className="appointment">
      <div className="container">
        <div className="d-grid justify-content-center">
          <div className="appointment__form__header text-center">
            <h2>{headerText ? headerText : "Book an appointment"}</h2>
          </div>

          <form action="" className="appointment__form container">
            <div className="row">
              {inputs?.map((input, index) => {
                return (
                  <div
                    key={index}
                    className={`d-flex ${
                      input.type === "textarea" ? "col-lg-12" : "col-lg-6"
                    }  mt-4 p-2`}
                  >
                    <div className="input">
                      {input.icon && (
                        <span className="icon">
                          <img src={input.icon} alt="icon" />
                        </span>
                      )}
                      {input.type !== "textarea" && (
                        <input
                          name={input.name}
                          type={input.type}
                          placeholder={input.placeholder}
                          required={input.required}
                          ref={input?.ref}
                        />
                      )}
                      {input.type === "textarea" && (
                        <textarea
                          name={input.name}
                          type={input.type}
                          placeholder={input.placeholder}
                          required={input.required}
                          ref={input?.ref}
                        ></textarea>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="col-lg-12 text-center d-grid justify-content-center mt-4">
                <div className="appointment__form__submit__btn">
                  <button type="submit">Send</button>

                  <img src={send} alt="icon" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
