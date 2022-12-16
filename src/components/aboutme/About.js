import React, { useEffect } from "react";
import "./about.css";
import logo from "./gg.PNG";
import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="About" id="intro">
      <div className="top">
        <div className="heading">
          <span>
            <img
              data-aos="fade-right"
              className="img"
              src={logo}
              alt="img"
            ></img>
          </span>

          <h1 data-aos="flip-left">
            I am a{" "}
            <Typical
              steps={[
                "Creative Person 💯",
                1000,
                "Web-Designer🧑‍🎨",
                2000,
                "FrontEnd-Developer 💧💥",
                3000,
                "Dota2 Player 🗡️ ",
                4000,
                "Footballer🏅",
                5000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
        </div>
      </div>
      <div className="bot">
        <div className="textbox">
          <h3 data-aos="fade-left">
            Software developer looking for a Web-developer position in all sorts
            of small to large organizations where I can apply my Web designing
            experience to further enhance my skills and deliver quality work.
          </h3>
        </div>
        <a href="#portfolio" className="scrollDown">
          <ExpandMoreIcon style={{ fontSize: 40 }} />
          <ExpandMoreIcon style={{ fontSize: 40 }} />
          <ExpandMoreIcon style={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
};

export default About;
