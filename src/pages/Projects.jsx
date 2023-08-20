import React from "react";

//img
import "../styles/projects/index.scss";
import AnimatedText from "../components/AnimatedText";
import newEggIcon from "../assets/project-icons/newEggIcon.png";
import filmFolia from "../assets/project-icons/film-folia-icon.png";
import leagueTrackerIcon from "../assets/project-icons/lt.png";
import pomodoroIcon from "../assets/project-icons/mode1_icon.png";
import stereoIcon from "../assets/project-icons/stereoh_icon.png";
import { BiLogoReact } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoJavascript,
} from "react-icons/bi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { GrNode } from "react-icons/gr";
import { FaCcStripe, FaCcPaypal } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const breakpoints = {
  540: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1324: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};

const Projects = () => {
  const projects = [
    {
      demo: "film-folia",
      github: "S4NCHOPANZ4/FilmFolia",
    },
    {
      demo: "stereo-heart",
      github: "S4NCHOPANZ4/StereoHeart",
    },
    {
      demo: "new-egg-ecomerce-y9so",
      github: "S4NCHOPANZ4/newEgg_Ecomerce/tree/main",
    },
    {
      demo: "pomodoros-puce",
      github: "S4NCHOPANZ4/pomodoros",
    },
    {
      demo: "lol-tracker-v1",
      github: "S4NCHOPANZ4/RiotAPi",
    },
  ];

  const goToDemo = (deployment, urlplus) => {
    window.open(
      `https://${deployment}.vercel.app${urlplus ? urlplus : ""}`,
      "_blank"
    );
  };
  const goToGitHub = (deployment) => {
    window.open(`https://github.com/${deployment}`, "_blank");
  };

  return (
    <div className="projects__super">
      <div className="projects_title">
        <AnimatedText clase={"projects_title_cc"} text={"My Projects  📄"} />
        <div className="side-iden">
          <p className="indentifyer">Scroll</p>
          <GoArrowRight size={20} />
        </div>
      </div>
      <div className="swiper-cont">
        <GoArrowLeft className="swiper-icon" size={20} />
        <Swiper
          slidesPerView={1}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={breakpoints}
        >
          <SwiperSlide className="swiper-slide">
            <div 
            className="project_card project_card_1">
              <div className="project_card_icon">
                <img src={filmFolia} alt="" />
              </div>
              <div className="project_desc">
                <p>
                  React App that seamlessly merges MongoDB, Tailwind CSS,
                  Node.js and Express, creating a space where movie fans around
                  the world can share their thoughts and discussions.
                </p>
                <div className="project_links">
                  <RxOpenInNewWindow
                    onClick={() => goToDemo(projects[0].demo)}
                    size={20}
                  />
                  <AiFillGithub
                    onClick={() => goToGitHub(projects[0].github)}
                    size={20}
                  />
                </div>
              </div>
              <div className="toolkits">
                <BiLogoJavascript className="tools" size={35} />
                <BiLogoReact className="tools" size={35} />
                <TbApi className="tools" size={35} />
                <BiLogoTailwindCss className="tools" size={35} />
                <BiLogoMongodb className="tools" size={35} />
                <GrNode className="tools" size={35} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide custom-width-slide">
            <div 
            className="project_card project_card_2">

              <div className="project_card_icon">
                <img src={stereoIcon} alt="" />
              </div>
              <div className="project_desc">
                <p>
                  Combining the power of React, JavaScript, and Tailwind, we
                  harness the Shazam Core API to craft an immersive audio
                  discovery platform. Elevate your music experience and explore
                  tracks seamlessly, redefining audio exploration, just like
                  Spotify.
                </p>
                <div className="project_links">
                  <RxOpenInNewWindow
                    onClick={() => goToDemo(projects[1].demo)}
                    size={20}
                  />
                  <AiFillGithub
                    onClick={() => goToGitHub(projects[1].github)}
                    size={20}
                  />
                </div>
              </div>
              <div className="toolkits">
                <BiLogoJavascript className="tools" size={35} />
                <BiLogoReact className="tools" size={35} />
                <BiLogoTailwindCss className="tools" size={35} />
                <TbApi className="tools" size={35} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide custom-width-slide">
            <div 
            className="project_card project_card_3">
              <div className="project_card_icon">
                <img src={newEggIcon} alt="" />
              </div>
              <div className="project_desc">
                <p>
                  React e-commerce app. Shop securely with PayPal and Stripe.
                  Discover a wide range of dummy data products as we work to
                  perfect the shopping destination (under development).
                </p>
                <div className="project_links">
                  <RxOpenInNewWindow
                    onClick={() => goToDemo(projects[2].demo)}
                    size={20}
                  />
                  <AiFillGithub
                    onClick={() => goToGitHub(projects[2].github)}
                    size={20}
                  />
                </div>
              </div>
              <div className="toolkits">
                <BiLogoReact className="tools" size={35} />
                <GrNode className="tools" size={35} />
                <BiLogoTailwindCss className="tools" size={35} />
                <BiLogoMongodb className="tools" size={35} />
                <FaCcStripe className="tools" size={35} />
                <FaCcPaypal className="tools" size={35} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide custom-width-slide">
            <div className="project_card project_card_4">
              <div className="project_card_icon">
                <img src={pomodoroIcon} alt="" />
              </div>
              <div className="project_desc">
                <p>
                  Boost your productivity and stay focused with this React app
                  inspired by the Pomodoro Technique
                </p>
                <div className="project_links">
                  <RxOpenInNewWindow
                    onClick={() => goToDemo(projects[3].demo)}
                    size={20}
                  />
                  <AiFillGithub
                    onClick={() => goToGitHub(projects[3].github)}
                    size={20}
                  />
                </div>
              </div>
              <div className="toolkits">
                <BiLogoReact className="tools" size={35} />
                <BiLogoTypescript className="tools" size={35} />
                <FaSass className="tools" size={35} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide custom-width-slide">
            <div className="project_card project_card_5"
            >
              <div className="project_card_icon">
                <img src={leagueTrackerIcon} alt="" />
              </div>
              <div className="project_desc">
                <p>
                  React app utilizing the Riot Games API to explore match
                  information, discover top players on different servers, and
                  view your own or your friends' matches.
                </p>
                <div className="project_links">
                  <RxOpenInNewWindow
                    onClick={() => goToDemo(projects[4].demo)}
                    size={20}
                  />
                  <AiFillGithub
                    onClick={() => goToGitHub(projects[4].github)}
                    size={20}
                  />
                </div>
              </div>
              <div className="toolkits">
                <BiLogoReact className="tools" size={30} />
                <BiLogoTypescript className="tools" size={30} />
                <FaSass className="tools" size={30} />
                <TbApi className="tools" size={35} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <GoArrowRight className="swiper-icon" size={20} />
      </div>
    </div>
  );
};

export default Projects;
