import React, { useState } from "react";
// import Aos from "aos";
import "aos/dist/aos.css";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import "./portfolio.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import VisibilityIcon from "@material-ui/icons/Visibility";

// import { Carousel } from "react-bootstrap";
const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      url: "https://social-index.onrender.com/",
      title: "Full stack Social media App",
      desc: "This is a Full-stack app that I have created using MERN and deployed on Heroku. Here the user can log in create a post like and comment on the posts, you can also see every user's profile that is available on the Home page. ",
      img: "https://res.cloudinary.com/mantiscloud/image/upload/v1671183443/Screenshot_2022-12-16_150626_ds2moi.png",
    },
    {
      id: "2",
      url: "https://mrcocktail.netlify.app/",
      title: "Cocktail Search",
      desc: "The project uses core features of React like React router, context API, and Hooks to build a website where you can search all the famous cocktails across the world",
      img: "https://res.cloudinary.com/mantiscloud/image/upload/v1626635548/Capture2_x12k1z.png",
    },
    {
      id: "3",
      url: "https://abhsiksah.github.io/Notes-app-react/",
      title: "A Notes taking app",
      desc: "It's a simple note-taking website, where you can add, edit, save and delete your notes!",
      img: "https://res.cloudinary.com/mantiscloud/image/upload/v1626635548/Capture1_zkgx1v.png",
    },
    {
      id: "4",
      url: "https://crytotrackerreact.netlify.app/",
      title: "Crypto-Tracker",
      desc: "The purpose of this project was to show all the possible cryptocurrencies important information on a page where you can search your desired crypto-coins information",
      img: "https://res.cloudinary.com/mantiscloud/image/upload/v1626635548/Capture1_zkgx1v.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div data-aos="fade-up-right" className="Portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div data-aos="flip-left" className="container">
            <div className="item">
              <div data-aos="fade-up-left" className="left1">
                <div className="leftcontainer">
                  <div data-aos="fade-up-left" className="imgcontainer">
                    <FingerprintIcon />
                  </div>
                  <h2 data-aos="fade-up-right">{d.title}</h2>

                  <a
                    data-aos="fade-up-right"
                    className="projectview"
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <VisibilityIcon /> View
                  </a>
                </div>
              </div>
              <div className="right1">
                <img
                  data-aos="flip-up"
                  data-aos-duration="3000"
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div data-aos="flip-right" className="leftarrowprot">
        <ChevronLeftIcon
          className="arrowleft"
          style={{ color: "white", fontSize: 140, cursor: "pointer" }}
          onClick={() => handleClick("left")}
        />
      </div>
      <div data-aos="flip-left" className="rightarrowprot">
        <ChevronRightIcon
          className="arrowright"
          style={{ color: "white", fontSize: 140, cursor: "pointer" }}
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default Portfolio;
