import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  let details = ["+91 58758-580750", "demosite@gmail.com", "Anna Nagar Salem"];
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer_page">
      <div className="footer_block1">
        <div className="navBarComp1">
          <ul>
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer_block2">
        {" "}
        <h1>Quick Links</h1>
        <div className="footer_links">
          <Link to={"./"} onClick={scrollToTop}>
            Home
          </Link>
          <Link to={"./service"}>Services</Link>
          <Link to={"/testimonal"}>Testimonal</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/project"}>Projects</Link>
          <Link to={"/blog"}>Blogs</Link>{" "}
        </div>
      </div>
      <div className="footer_block3">
        {" "}
        <h1>Work Portfolio</h1>{" "}
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
      </div>
      <div className="footer_block4">
        {" "}
        <h1>SignUp To Our News letter</h1>
        <input
          type="text"
          name=""
          id=""
          className="footer_input_block"
          placeholder="Enter Email"
        />
        <button type="button" className="footer_input_button">
          SUBSCRIBE
        </button>
      </div>
      <div className="footer_block5">
        {" "}
        <div className="footer_icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagramSquare />
        </div>
      </div>
    </div>
  );
};

export default Footer;
