import IntroHeader from "../components/IntroHeader";
import { aboutUsData } from "../data/dummyData";
import founders from "../assets/images/founders.png";
import "../styles/about.scss";

const About = () => {
  return (
    <div className=" about bg-circle">
      <IntroHeader title={aboutUsData.title} text={aboutUsData.text} />
      <div className="container about-founders">
        <div className="about-founders__text">
          <h6 className="sup-title">A few words</h6>
          <h2 className="about-section__title">About the founders</h2>
          <p className="about-section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra lacus eget ornare hendrerit. Quisque tempus bibendum
            elementum. Donec eget urna nisi. In non nunc mauris. Suspendisse in
            sem sed lacus.
          </p>
          <p className="about-section__text">
            Blandit at ornare nibh. Sed bibendum, metus vitae aliquet dignissim,
            sem lorem pretium ipsum.
          </p>
        </div>
        <div className="about-founders__image">
          <img src={founders} alt="founders" />
        </div>
      </div>

      <div className="section-seperator__wrapper">
        <span className="section-seperator"></span>
      </div>

      <div className="about-clients about-section container">
        <h6 className="sup-title">We value our clients</h6>
        <h2 className="about-section__title">
          Customer service is at the core of our business
        </h2>
        <p className="about-section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra lacus eget ornare hendrerit. Quisque tempus bibendum
          elementum. Donec eget urna nisi. In non nunc mauris. Suspendisse in
          sem sed lacus rhoncus blandit at ornare nibh. Sed bibendum, metus
          vitae aliquet dignissim, sem lorem pretium ipsum, sit amet cursus
          risus velit nec neque. Nam convallis.
        </p>
        <p className="about-section__text">
          Ullamcorper dui nec pellentesque. Nam fringilla eros arcu, sed
          bibendum orci posuere non. Morbi eu lorem sapien. In pharetra, metus
          ac pulvinar pharetra.
        </p>
      </div>
      <div className="about-fixed__image"></div>
      <div className="about-image__overlay"></div>
      {/* kqyr a tka funksionu */}
    </div>
  );
};

export default About;
