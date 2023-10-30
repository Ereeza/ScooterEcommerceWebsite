import IntroHeader from "../components/IntroHeader";
import Button from "../components/Shared/Button";
import TextField from "../components/Shared/TextField";
import { contactData } from "../data/dummyData";
import "../styles/contact.scss";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meqbpyje");

  return (
    <div className="bg-circle">
      <IntroHeader title={contactData.title} text={contactData.text} />
      {/* <div className="contact-main"> */}
      <div className="contact-main container">
        <div className="contact-details">
          <h6 className="sup-title">Contact Details</h6>
          <p className="contact-details__text">
            <b>E:</b> <a href="#">info@example.com</a>
            <br />
            <b>P:</b> +1 234 567 890
            <br />
            <b>A:</b> 123 Fifth Avenue, New York, NY 10160
          </p>
          <h6 className="sup-title">Follow us</h6>
          <div></div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-inputGroup input-name">
            <div>
              <label htmlFor="firstname">First Name</label>
              <span className="input-required">*</span>

              <TextField name="firstname" id="firstname" type="text" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <span className="input-required">*</span>

              <TextField name="lastname" id="lastname" type="text" />
            </div>
          </div>
          <div className="contact-inputGroup">
            <label htmlFor="email">Email</label>
            <span className="input-required">*</span>

            <TextField name="email" id="email" type="email" />
          </div>

          <div className="contact-inputGroup">
            <label htmlFor="message">Message</label>
            <span className="input-required">*</span>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact-message"
            ></textarea>
          </div>
          {state.succeeded && (
            <div className="thank-you-message">
              Thank you for contacting us!
            </div>
          )}
          <button type="submit" disabled={state.submitting} className="button">
            send
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
