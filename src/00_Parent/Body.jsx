import { useContext } from "react";
import Navbar from "../Components/01_Navbar/Navbar";
import App from "../App.jsx";
import Cursor from "../Components/Cursor/Cursor.jsx";
import "./Body.css";
import { ThemeContext } from "../Context/ThemeContext.jsx";
const Body = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`main_body_light default ${isDarkMode && "main_body_dark"}`}
    >
      <Cursor />
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <App />
        </div>
      </div>
    </div>
  );
};

export default Body;
