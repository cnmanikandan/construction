import myImage from "./images/icon-4.png";
import icon_2 from "./images/icon-2.png";
import icon_3 from "./images/icon-3.png";
import icon_4 from "./images/icon-1.png";
import { Link } from "react-router-dom";

const Service = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="service_page">
        <div className="service_page_header">
          <h1>Our Services</h1>
        </div>
        <div className="service_page_para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio
            necessitatibus consequatur perferendis ea corrupti quis aspernatur
            enim quibusdam? Velit harum asperiores dolores a vel accusantium ab
            praesentium ut delectus!
          </p>
        </div>
        <div className="service_page_cards">
          <div className="service_page_card1">
            <img src={myImage} alt="" />
            <div>
              <h1>Cosntruction Service</h1>
              <p>
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using L
              </p>
              <Link to={"/"} onClick={scrollToTop}>
                Read More..
              </Link>
            </div>
          </div>
          <div className="service_page_card2">
            <img src={icon_2} alt="" />
            <div>
              <h1>Building Moduling</h1>
              <p>
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using L
              </p>
              <Link to={"/"} onClick={scrollToTop}>
                Read More..
              </Link>
            </div>
          </div>
          <div className="service_page_card3">
            <img src={icon_3} alt="" />
            <div>
              <h1>PRE Construction</h1>
              <p>
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using L
              </p>
              <Link to={"/"} onClick={scrollToTop}>
                Read More..
              </Link>
            </div>
          </div>
          <div className="service_page_card4">
            <img src={icon_4} alt="" />
            <div>
              <h1>Managment</h1>
              <p>
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using L
              </p>
              <Link to={"/"} onClick={scrollToTop}>
                Read More..
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Service;
