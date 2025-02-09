import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Service from "./pages/ServicePage";
import About from "./pages/About_Page";
import Project from "./pages/Project_Page";
import Blog from "./Blog";
import Testimonal from "./pages/Testimonal_page";
import Contact from "./pages/Contact_page";
import Login from "./Login";
import GetaQoute from "./GetaQoute";
const NavBar = () => {
  let details = ["+91 58758-580750", "demosite@gmail.com", "Anna Nagar Salem"];
  return (
    <div>
      <div className="navBarComp1">
        <ul>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <nav className="navBarComp2">
        <BrowserRouter>
          <ul>
            <li>
              {" "}
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./service"}>service</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./about"}>About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./project"}>project</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./blog"}>Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./testimonal"}>testimonal</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./contact"}>Contact Us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./login"}>Login</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"./quote"}>Get a Quote</Link>{" "}
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonal" element={<Testimonal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quote" element={<GetaQoute />} />
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
};

export default NavBar;
