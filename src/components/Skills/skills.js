import React from "react";
import "./skills.css";
import Wordpress from "../../assets/wordpress.png";
import DigitalM from "../../assets/digitalM.png";
import Videoeditor from "../../assets/videdit.png";
import Photography from "../../assets/photographer.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a self learner Wordpress Developer,Digital marketer, Video editor
        and photographer. I have done lot of project based on my Skills on each
        field of my expertise. I always try to improve my skills.
      </span>
      <div className="skillsBars">
        <div className="skillsBar">
          <img src={Wordpress} alt="Wordpress" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Wordpress Developer</h3>
            <p>
              Specializing in custom themes and plugins for enhancing user
              experiences.
            </p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={DigitalM} alt="DigitalM" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Digital Marketing</h3>
            <p>
              Results-driven digital marketer focused on creating impactful
              online campaigns.{" "}
            </p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={Videoeditor} alt="Videoeditor" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Video Editor</h3>
            <p>
              Skilled video editor with a keen eye for detail and storytelling.
            </p>
          </div>
        </div>

        <div className="skillsBar">
          <img src={Photography} alt="Photography" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Photographer</h3>
            <p> Capturing life's moments with artistic flair and precision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
