import { useContext, useEffect, useState } from "react";
import "./About.css";
import data from "../../about.json";
import { ThemeContext } from "../../Context/ThemeContext";
import { motion } from "framer-motion";
const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <div className="main_container_about">
        <motion.div
          className="info_about"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="who_am_i">
            <span>Who Am I ?</span>
          </div>
          <div className="info_para">
            <span> Hello there! </span> <br />
            <span className="regular info_txt">
              I am known as Zlaam, A dedicated and skilled FullStack-web App
              developer with a several Years of hands-on experience. My true
              passion lies in transforming concepts into tangible digital
              solutions, and I wholeheartedly embrace new challenges that come
              my way. I am proficient in languages such as JavaScript and
              Python, I specialize in creating dynamic and responsive web
              applications. My goal is to continue pushing the boundaries of
              innovation in the ever-evolving field of web development.
            </span>
          </div>
          <div className="date_wrapper">
            <div className="date">
              <span>{date}-</span>
              <span>{month}-</span>
              <span>{year}</span>
            </div>
            <div className="avail">Avialable For Collaborate</div>
          </div>
        </motion.div>
        <motion.div
          className="expertise"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="my_expertise">My Expertiese:- </div>
          <div className="main_card">
            {data &&
              data.map((data, index) => {
                return (
                  <>
                    <div
                      className={`card ${
                        isDarkMode ? "card_dark" : "card_light"
                      }`}
                      key={index}
                    >
                      <img src={data.image} alt={data.title} />
                      <div className="card__content">
                        <p className="card__title">{data.title}</p>
                        <p
                          className={`card__description  ${
                            isDarkMode ? "text_dark" : "text_light"
                          }
                        
                        `}
                        >
                          {data.content}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
