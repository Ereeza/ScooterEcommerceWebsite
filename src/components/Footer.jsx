import "../styles/footer.scss";
import "../styles/global.scss";
import logoFooter from "../assets/images/logo-footer.png";
import { footerData } from "../data/dummyData";
// import { footerPaymentData } from "../data/dummyData";
import paymentIcons from "../assets/images/payment-icons.png";
import Button from "./Shared/Button";
import TextField from "./Shared/TextField";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-block">
          <img className="footer-block__logo" src={logoFooter} alt="logo" />
          <p className="footer-block__text">
            Duis aute irure dolor in reprehen derit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="footer-socialMedia"></div>
        </div>
        <div className="footer-block">
          <h5 className="footer-block__title">Contact us</h5>
          <p className="footer-block__text">
            <b>E:</b> <a href="mailto:info@example.com">info@example.com</a>
            <br />
            <b>P:</b> +1 234 567 890
            <br />
            <b>A:</b> 123 Fifth Avenue, New York, NY 10160
          </p>
        </div>
        <div className="footer-block">
          <h5 className="footer-block__title">Useful links</h5>
          <div>
            <ul className="footer-block__list">
              {footerData.navList.map((item) => (
                <li key={item.id}>
                  <Link to={`${item.title}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-block">
          <h5 className="footer-block__title">Sign up for special offers</h5>
          <div>
            <div>
              <TextField
                className="footer-inputField"
                placeholder="Email address"
              />
            </div>
            <div>
              <Button className="button">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright__wrapper">
        <div className="footer-copyright container">
          <div>
            <p>
              Copyright © 2023 Electric Scooter | Powered by Electric Scooter
            </p>
          </div>
          <div>
            <img src={paymentIcons} alt="Payment Icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
