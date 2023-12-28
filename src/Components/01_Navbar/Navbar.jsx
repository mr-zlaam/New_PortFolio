import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLink";
import { MdMenu, MdClear } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {
  const { setIsMenuOpen, isMenuOpen } = useContext(ThemeContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const WINDOW_CLOSER_NAV = () => {
    if (windowWidth >= 1173) return setIsMenuOpen(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    WINDOW_CLOSER_NAV();
  }, [windowWidth]);

  const showMenu = () => {
    if (isMenuOpen) return setIsMenuOpen(false);
    if (!isMenuOpen) return setIsMenuOpen(true);
  };

  return (
    <>
      <header className="nav_container">
        <div className="logo">
          <Link to={"/"} className="default">
            <img src="/logo/siraj.png" alt="Zlaam" width={80} />
          </Link>
        </div>
        <div
          className={` ${
            isMenuOpen
              ? " navbar_controller-visible "
              : " navbar_controller-invisible "
          }
          `}
        >
          <NavLinks />
        </div>
        {isMenuOpen && (
          <div
            className="menu_closer_div"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <div className="menu_controller">
          {isMenuOpen ? (
            <div className="menu_icon">
              <MdClear onClick={showMenu} size={30} />
            </div>
          ) : (
            <div className="menu_icon">
              <MdMenu onClick={showMenu} size={30} />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
