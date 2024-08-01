import React from "react";
import "./works.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio6 from "../../assets/portfolio6.png";
import portfolio7 from "../../assets/portfolio7.png";
import portfolio8 from "../../assets/portfolio8.jpeg";
import portfolio9 from "../../assets/portfolio9.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio </h2>
      <span className="worksDesc">
        I am a skilled WordPress developer and digital marketer, adept at
        building engaging websites and effective online campaigns. I brings a
        creative eye to My photography, capturing stunning images, and my video
        editing expertise transforms raw footage into captivating visual
        stories. With a diverse skill set, I excels in delivering comprehensive
        digital solutions.
      </span>
      <div className="worksImgs">
        <img src={portfolio1} alt="" className="worksImg" />

        <img src={portfolio3} alt="" className="worksImg" />
        <img src={portfolio4} alt="" className="worksImg" />
        <img src={portfolio6} alt="" className="worksImg" />
        <img src={portfolio7} alt="" className="worksImg" />
        <img src={portfolio8} alt="" className="worksImg" />
        <img src={portfolio9} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See More </button>
    </section>
  );
};

export default Works;
