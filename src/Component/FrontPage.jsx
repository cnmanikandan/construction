import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div>
      <div className="firstPage">
        <div className="first_page_box">
          <h1>Builder Construction Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            magni cum facilis nulla ratione veniam accusantium reprehenderit
            obcaecati aspernatur dolorem ipsam, eius similique ut expedita
            provident in! Suscipit, consequuntur nobis!
          </p>

          <div>
            <button className="homePage_button">
              <Link to={"./contact"}>Contact </Link>
            </button>
            <button className="homePage_button">
              <Link to={"./about"}>About Us </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
