import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setIsDarkMode, setIsMenuOpen, isMenuOpen }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
