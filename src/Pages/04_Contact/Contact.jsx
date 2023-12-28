import {} from "react";
import "./Contact.css";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="parent_contact_container">
        <div className="content_wrapper_contact">
          <Link to={"/termsconditions"} className="default term_conditions">
            <span> Read This Before Contact</span>
            <span className="term_conditions_icon">
              <LiaExternalLinkSquareAltSolid />
            </span>
          </Link>
          <div className="social_container">
            <motion.div
              className="social_img"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img src="/contact.png" alt="image" />
            </motion.div>
            <motion.div
              className="social_icons"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="facebook icon_div">
                <FaFacebookMessenger className="icon" />
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/messages/t/100052341221564"}
                  className="default icon_text"
                >
                  Messenger
                </Link>
              </div>
              <div className="mail icon_div">
                <MdEmail className="icon" />
                <Link
                  target="_blank"
                  to="mailto:mrzalaam@gmail.com"
                  className="default icon_text"
                >
                  Email
                </Link>
              </div>
              <div className="linkedin icon_div">
                <ImLinkedin className="icon" />
                <Link
                  target="_blank"
                  to={
                    "https://www.linkedin.com/in/%D9%85%D9%84%D9%83-%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85-696066266/"
                  }
                  className="default icon_text"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="insta icon_div">
                <BsInstagram className="icon" />
                <Link
                  target="_blank"
                  to={"https://www.instagram.com/its_zlaam/"}
                  className="default icon_text"
                >
                  Instagram
                </Link>
              </div>
              <div className="git icon_div">
                <FaGithub className="icon" />
                <Link
                  target="_blank"
                  to={"https://github.com/mr-zlaam"}
                  className="default icon_text"
                >
                  GitHub
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
