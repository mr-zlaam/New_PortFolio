import { useContext, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Theme.css";
const Theme = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkMode === "true");
  }, [setIsDarkMode]);

  const toggleThemeMode = () => {
    setIsDarkMode((prevmode) => {
      const newDarkMode = !prevmode;
      localStorage.setItem("isDarkMode", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <>
      {isDarkMode ? (
        <div className="toggler_icon">
          <BsSunFill onClick={toggleThemeMode} className="icon_sun default " />
        </div>
      ) : (
        <div className="toggler_icon">
          <BsFillMoonFill
            onClick={toggleThemeMode}
            className="icon_moon default "
          />
        </div>
      )}
    </>
  );
};

export default Theme;
