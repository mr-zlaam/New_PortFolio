import { motion } from "framer-motion";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home_parent">
        <div className="home_container">
          <div className="home_content">
            <motion.div
              className="home_about "
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: -700, transition: { duration: 0.2 } }}
            >
              Hi. I'm Zláam. <br />A FullStack Web-Dev.
            </motion.div>
            <motion.div
              className="about_img_container "
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: 700, transition: { duration: 0.2 } }}
            >
              <img
                src="https://live.staticflickr.com/65535/53281434521_eeef635514_z.jpg"
                alt="zlaam"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
