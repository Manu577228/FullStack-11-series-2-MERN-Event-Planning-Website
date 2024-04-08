import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe that it is all about the DREAMS and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Book Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
