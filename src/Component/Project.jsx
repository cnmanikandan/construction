import { Link } from "react-router-dom";
import home_1 from "./images/img-1.png";
import home_2 from "./images/img-2.png";
import home_3 from "./images/img-3.png";

const Project = () => {
  let nav_data = [
    "Category Filter",
    "All",
    "Painting",
    "Reconstruction",
    "repair",
    "ResidentAll",
  ];
  let Project_data =
    "alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use";
  return (
    <div className="project_page">
      <div>
        <h1 id="project_page_header">Project</h1>
        <nav className="Project_navBar">
          <ul>
            <li>
              <Link>{nav_data[0]}</Link>
            </li>
            <li>
              <Link>{nav_data[1]}</Link>
            </li>

            <li>
              <Link>{nav_data[2]}</Link>
            </li>
            <li>
              <Link>{nav_data[3]}</Link>
            </li>
            <li>
              <Link>{nav_data[4]}</Link>
            </li>
            <li>
              <Link>{nav_data[5]}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="project_card_block">
        <div className="project_card_block1">
          <img src={home_1} alt="" />
          <h2 style={{ color: "white" }}>Home Work</h2>
          <p style={{ color: "white" }}>{Project_data}</p>
        </div>
        <div className="project_card_block2">
          <img src={home_2} alt="" />
          <h2 style={{ color: "white" }}>Home Work</h2>
          <p style={{ color: "white" }}>{Project_data}</p>
        </div>
        <div className="project_card_block3">
          <img src={home_3} alt="" />
          <h2 style={{ color: "white" }}>Home Work </h2>
          <p style={{ color: "white" }}>{Project_data}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
