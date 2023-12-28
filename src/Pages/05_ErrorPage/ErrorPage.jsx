import {} from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ErrorPage = () => {
  return (
    <>
      <motion.div
        className="error_page_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="error_content_wrapper">
          <h1 className="error_no">
            <sapn className="number">404</sapn>{" "}
            <span className="error_txt">Page Not Found</span>
            <br />
            <Link className="return_by_death default" to={"/"}>
              Home
            </Link>
          </h1>
        </div>
      </motion.div>
    </>
  );
};

export default ErrorPage;
