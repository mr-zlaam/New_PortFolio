import { useContext } from "react";
import Theme from "../Theme/Theme";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";
import "./Navbar.css";
const NavLinks = () => {
  const { isMenuOpen, isDarkMode, setIsMenuOpen } = useContext(ThemeContext);
  const handleClose = () => {
    return setIsMenuOpen(false);
  };
  return (
    <>
      <nav
        className={` ${isDarkMode ? "navbar dark_nav" : "navbar light_nav"} 
          ${!isMenuOpen && "navbar_transparent"}

        `}
      >
        <span className="cta">
          <Link
            to={"/"}
            className={`hover-underline-animation-dark  acorn default ${
              isDarkMode
                ? "hover-underline-animation-dark"
                : "hover-underline-animation-light"
            }`}
          >
            <span
              className={`${isDarkMode ? "text_dark" : "text_light"}`}
              onClick={handleClose}
            >
              Home
            </span>
          </Link>
        </span>
        <span className="cta">
          <Link
            to={"/about"}
            className={`hover-underline-animation-dark  acorn default ${
              isDarkMode
                ? "hover-underline-animation-dark"
                : "hover-underline-animation-light"
            }`}
          >
            <span
              className={`${isDarkMode ? "text_dark" : "text_light"}`}
              onClick={handleClose}
            >
              Expertise
            </span>
          </Link>
        </span>
        <span className="cta">
          <Link
            to={"/work"}
            className={`hover-underline-animation-dark  acorn default ${
              isDarkMode
                ? "hover-underline-animation-dark"
                : "hover-underline-animation-light"
            }`}
          >
            <span
              className={`${isDarkMode ? "text_dark" : "text_light"}`}
              onClick={handleClose}
            >
              Work
            </span>
          </Link>
        </span>
        <span className="cta">
          <Link
            to={"/contact"}
            className={`hover-underline-animation-dark  acorn default ${
              isDarkMode
                ? "hover-underline-animation-dark"
                : "hover-underline-animation-light"
            }`}
          >
            <span
              className={`${isDarkMode ? "text_dark" : "text_light"}`}
              onClick={handleClose}
            >
              Contact
            </span>
          </Link>
        </span>
        <span className="cta">
          <Link className="default">
            <Theme />
          </Link>
        </span>
      </nav>
    </>
  );
};

export default NavLinks;
