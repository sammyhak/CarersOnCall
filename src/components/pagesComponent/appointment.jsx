import { useRef, useState } from "react";
import "../../styles/components/pagesComponents/appointment.scss";
import calendar from "../../assets/icons/Calendar-form.svg";
import time from "../../assets/icons/Time-form.svg";
import send from "../../assets/icons/Send.svg";
import { validationSchema } from "../../hooks/validationSchema";

const AppointmentForm = ({ headerText }) => {
  // Refs for date and time inputs
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  // State for form fields and validation
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validate a single field
  const validateField = (name, value) => {
    const fieldSchema = validationSchema.extract(name);
    const { error } = fieldSchema.validate(value);
    return error ? error.details[0].message : null;
  };

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the changed field
    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Validate entire form
    const { error } = validationSchema.validate(formData, {
      abortEarly: false,
    });

    if (error) {
      const newErrors = {};
      error.details.forEach((detail) => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);
      // Proceed with form submission logic (e.g., API call)
    }

    setSubmitting(false);
  };

  const inputs = [
    {
      name: "firstname",
      value: formData.firstname,
      icon: "",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      name: "lastname",
      value: formData.lastname,
      icon: "",
      type: "text",
      placeholder: "Last Name",
      required: true,
    },
    {
      name: "email",
      value: formData.email,
      icon: "",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      name: "phone",
      value: formData.phone,
      icon: "",
      type: "text",
      placeholder: "Phone",
      required: true,
    },
    // {
    //   name: "date",
    //   value: formData.date,
    //   icon: calendar,
    //   type: "date",
    //   placeholder: "Appointment Date",
    //   required: false,
    //   ref: dateInputRef,
    // },
    // {
    //   name: "time",
    //   value: formData.time,
    //   icon: time,
    //   type: "time",
    //   placeholder: "Appointment Time",
    //   required: false,
    //   ref: timeInputRef,
    // },
    {
      name: "message",
      value: formData.message,
      icon: "",
      type: "textarea",
      placeholder: "Describe what you’re looking for...",
      required: false,
    },
  ];

  return (
    <section className="appointment">
      <div className="container">
        <div className="d-grid justify-content-center">
          <div className="appointment__form__header text-center">
            <h2>{headerText ? headerText : "Book an appointment"}</h2>
          </div>

          <form onSubmit={handleSubmit} className="appointment__form container">
            <div className="row">
              {inputs.map((input, index) => (
                <div
                  key={index}
                  className={`d-flex ${
                    input.type === "textarea" ? "col-lg-12" : "col-lg-6"
                  } mt-4 p-2`}
                >
                  <div className="input">
                    {input.icon && (
                      <span className="icon">
                        <img src={input.icon} alt="icon" />
                      </span>
                    )}
                    {input.type !== "textarea" ? (
                      <input
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        required={input.required}
                        ref={input.ref}
                        value={input.value}
                        onChange={handleChange}
                      />
                    ) : (
                      <textarea
                        name={input.name}
                        placeholder={input.placeholder}
                        required={input.required}
                        value={input.value}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                </div>
              ))}

              {Object.keys(errors).length > 0 &&
                Object.keys(errors)?.map((error, index) => {
                  return (
                    <span key={index} className="error text-danger">
                      {errors[error]}
                    </span>
                  );
                })}

              <div className="col-lg-12 text-center d-grid justify-content-center mt-4">
                <div className="appointment__form__submit__btn">
                  <button type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Send"}
                  </button>
                  <img src={send} alt="Send icon" />
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
