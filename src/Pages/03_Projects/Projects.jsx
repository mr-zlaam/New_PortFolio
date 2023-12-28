import {} from "react";
import "./Projects.css";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectCard from "../../StyleComponents/card/Project_card";
const Projects = () => {
  return (
    <>
      <div className="projects_main_container">
        <Link to={"#"} className="resume default">
          <span>
            <FaDownload className="download_icon" />
          </span>
          <span className="resume_txt">Resume</span>
        </Link>
        <div className="projects_controller">
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
