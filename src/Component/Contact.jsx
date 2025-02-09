
import Login from "./Login";
import contact_img from "./images/contact-img.png";
const Contact = () => {
  return (
    <>
      <div className="contact_block">
        <div className="contact_block1">
          <Login />
        </div>
        <div className="contact_block2">
          <img
            src={contact_img}
            style={{ width: "48vw", height: "100vh" }}
            alt=""
          />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
