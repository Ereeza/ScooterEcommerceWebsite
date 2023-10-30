import "../styles/introHeader.scss";

const IntroHeader = ({ className, title, text }) => {
  return (
    <div className="section-intro">
      <div className="section-intro__container">
        <div className="section-intro__data">
          <h2 className="section-intro__title"> {title}</h2>
          <h3 className="section-intro__text">{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroHeader;
