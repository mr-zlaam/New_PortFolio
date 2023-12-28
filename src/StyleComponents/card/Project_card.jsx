import {} from "react";
import "./ProjectCard.css";
import data from "../../Project.json";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
const ProjectCard = () => {
  return (
    <>
      <div className="card_project_container">
        <motion.div
          className="main_project_card"
          initial={{ opacity: 0, x: -200, transitionDelay: 0.3 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {data &&
            data.map((data, index) => {
              return (
                <>
                  <div className="card_proj" key={index}>
                    <img src={data.img} alt={data.title} />
                    <div
                      className="cardcontent"
                      style={{ background: data.color }}
                    >
                      <p className="cardtitle"> {data.title}</p>
                      <p className="carddescription">{data.description}</p>
                      <div className="btn_div">
                        <button className="btns default">
                          <Link
                            target="_blank"
                            className="btn_link default "
                            to={data.project_url}
                          >
                            View Site
                            <IoIosArrowForward className="link_icon" />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
