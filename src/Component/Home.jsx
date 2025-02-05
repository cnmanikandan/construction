import Service from "./Service";
import About from "./About";
import Project from "./Project";
import Testimonal from "./Testimonal";
import Contact from "./Contact";
import FrontPage from "./FrontPage";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="main_page_">
      <FrontPage />
      <Service />
      <About />
      <Project />
      <Testimonal />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
