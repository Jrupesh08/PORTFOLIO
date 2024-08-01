import React from "react";
import "./contact.css";
import FacebookIcon from "../../assets/Facebooklogo.png";
import InstagramIcon from "../../assets/Instagram.png";
import LinkedinIcon from "../../assets/Linkedinlogo.png";
import GithubIcon from "../../assets/Github1.png";
import YoutubeIcon from "../../assets/Youtube1.png";

const Contact=()=>{







  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="ContactDecs">
          Please fill out the form below to get in touch!
        </span>




        <form className='contactForm' action ="https://getform.io/f/amdpjjgb" method="POST">
         

          
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="From Name"
          />

          <input
            type="email"
            className="email"
            placeholder="From Email"
            name="From email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>

          <span className="p">
         Find me on:
        </span>


          <div className="links">
            <a
              href="https://www.facebook.com/rupesh.joshi.927980?mibextid=ZbWKwL "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>

            <a
              href=" https://www.instagram.com/sstranger0826?igsh=dXd4Mm5vc3Rhb29i"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>

            <a
              href="https://www.linkedin.com/in/rupeshjoshi12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="Linkedin" className="link" />
            </a>

            <a
              href="https://github.com/Jrupesh08 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" className="link" />
            </a>

            <a
              href="https://youtube.com/@rupeshjoshi1212?si=RFuH-GlNzoIjCeZP "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YoutubeIcon} alt="Youtube" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
