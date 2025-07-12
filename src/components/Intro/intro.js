import React from "react";
import "./intro.css";
import mypic2 from "../../assets/mypic2.png";
import { Link } from "react-scroll";
import hireme from "../../assets/hireme.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Rupesh</span>
          <br />
          Web Devloper, Investor
        </span>

        <p className="introPara">
          I am a self learner junior web developer, Investor investing since
          2020
        </p>

       

       <Link></Link>

<a  href="https://drive.google.com/file/d/1DOJfJcMan9dEeegxbJk8a0o9d9VU-o3V/view?usp=drive_link" target="_blank" rel="noopener  noreferrer ">
<button type="CV" value="CV" className="submitBtn">
<img src={hireme} alt="Hire Me" className="hireme" /> Resume
           
          </button></a>


        
      </div>

      <img src={mypic2} alt="profile" className="mypic2" />
    </section>
  );
}

export default Intro;
