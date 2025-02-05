import { Link } from "react-router-dom";
import Footer from "./Footer";

// import aboutImage from "./images/about-img.png";
const About = () => {
  let para =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be surethere isn't anything embarrassing hidden in the middle of text. All";
  return (
    <>
      <div className="About_block">
        <div className="About_block1">
          <h1 className="service_page_header">About Us</h1>
          <p>{para}</p>
          <button className="About_block_button">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              Read More
            </Link>
          </button>
        </div>
        <div className="About_block2"></div>
      </div>
      <Footer />
    </>
  );
};

export default About;
