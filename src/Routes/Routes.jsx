import {} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/01_Home/Home";
import About from "../Pages/02_About/About";
import Projects from "../Pages/03_Projects/Projects";
import Contact from "../Pages/04_Contact/Contact";
import Terms from "../Pages/06_Terms/Terms";
import ErrorPage from "../Pages/05_ErrorPage/ErrorPage";
import { AnimatePresence } from "framer-motion";
const Router = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsconditions" element={<Terms />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
