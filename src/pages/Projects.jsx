import React from "react";

//img
import "../styles/projects/index.scss";
import AnimatedText from "../components/AnimatedText";

import filmFoliaImg from "../assets/svg-p/FilmFolia.png";
import stereoHeartsImg from "../assets/svg-p/stereo.png";
import newEggImg from "../assets/svg-p/newegg.png";
import pomodorosImg from "../assets/svg-p/pomofocus.png";
import loltrackerImg from "../assets/svg-p/leaguetraker.png";

import newEggIcon from "../assets/project-icons/newEggIcon.png";
import filmFolia from "../assets/project-icons/film-folia-icon.png";
import leagueTrackerIcon from "../assets/project-icons/lt.png";
import pomodoroIcon from "../assets/project-icons/mode1_icon.png";
import stereoIcon from "../assets/project-icons/stereoh_icon.png";
import { TbApi } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoJavascript,
} from "react-icons/bi";
import { GrNode } from "react-icons/gr";
import { FaCcStripe, FaCcPaypal } from "react-icons/fa";
import { GoArrowRight  } from "react-icons/go";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

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
    slidesPerView: 1.6,
    spaceBetween: 40,
  },
  1324: {
    slidesPerView: 2.6,
    spaceBetween: 50,
  },
};

const Projects = () => {


  

  const projects = [
    {
      demo: "film-folia",
      github: "S4NCHOPANZ4/FilmFolia",
      title: "Film Folia",
      description:
        "React App that seamlessly merges MongoDB, Tailwind CSS, Node.js and Express, creating a space where movie fans around the world can share their thoughts and discussions.",
      icon: filmFolia,
      background: filmFoliaImg,
      toolkit: [
        BiLogoJavascript,
        BiLogoReact, // Utiliza el componente real en lugar de la cadena "BiLogoReact"
        TbApi,
        BiLogoTailwindCss,
        BiLogoMongodb,
        GrNode,
      ],
    },
    {
      demo: "stereo-heart",
      github: "S4NCHOPANZ4/StereoHeart",
      title: "Stereo Hearts",
      description:
        "Combining the power of React, JavaScript, and Tailwind, we harness the Shazam Core API to craft an immersive audio discovery platform. Elevate your music experience and explore tracks seamlessly, redefining audio exploration, just like Spotify.",
      icon: stereoIcon,
      background: stereoHeartsImg,
      toolkit: [
        "BiLogoJavascript",
        "BiLogoReact",
        "BiLogoTailwindCss",
        "TbApi",
      ],
    },
    {
      demo: "new-egg-ecomerce-y9so",
      github: "S4NCHOPANZ4/newEgg_Ecomerce/tree/main",
      title: "New Egg",
      description:
        "React e-commerce app. Shop securely with PayPal and Stripe. Discover a wide range of dummy data products as we work to perfect the shopping destination (under development).",
      icon: newEggIcon,
      background: newEggImg,
      toolkit: [
        BiLogoReact,
        GrNode,
        BiLogoTailwindCss,
        BiLogoMongodb,
        FaCcStripe,
        FaCcPaypal,
      ],
    },
    {
      demo: "pomodoros-puce",
      github: "S4NCHOPANZ4/pomodoros",
      title: "Pomofocus",
      description:
        "Boost your productivity and stay focused with this React app inspired by the Pomodoro Technique",
      icon: pomodoroIcon,
      background: pomodorosImg,
      toolkit: [BiLogoReact, BiLogoTypescript, FaSass],
    },
    {
      demo: "lol-tracker-v1",
      github: "S4NCHOPANZ4/RiotAPi",
      title: "LeagueTracker",
      description:
        "React app utilizing the Riot Games API to explore match information, discover top players on different servers, and view your own or your friends' matches.",
      icon: leagueTrackerIcon,
      background: loltrackerImg,
      toolkit: [BiLogoReact, BiLogoTypescript, FaSass, TbApi],
    },
  ];

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
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          freeMode={true}
          modules={[Navigation]}
          navigation
          className="mySwiper"
          breakpoints={breakpoints}
        >
          {projects.map((element, index) => {
            return (
              <SwiperSlide key={element.demo} className="swiper-slide">
                  <ProjectCard data={element} index={index} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="comming-soon">
              <p>Comming Soon!</p>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
};


const ProjectCard = ({ data, index }) => {


  const DynamicComponent = ({ componentString, index }) => {
    const Component = eval(componentString);
    return (
      <>
        <Component className="tools" size={35} key={componentString} />
      </>
    );
  };
  

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
    <div key={index} className="project-container">
      <div className="project-ss">
        <div className="main-project-info">
          <p>{data.title}</p>

          <div className="nav-links">
            <RxOpenInNewWindow
              className="icon-1"
              onClick={() => goToDemo(data.demo)}
              size={25}
            />
            <AiFillGithub
              className="icon-2"
              onClick={() => goToGitHub(data.github)}
              size={25}
            />
          </div>
        </div>
        <div className="light-cover"></div>
        <img src={data.background} alt="" />
      </div>
      <div className="project-info">
        <div className="project-desc">
          <p>{data.description}</p>
        </div>
        <div className="project-icon">
          <img src={data.icon} alt="" />
        </div>
        <div className="project-toolkit">
          <div className="toolkits">
            {data.toolkit.map((tool, i) => {
              return (
                <DynamicComponent index={i} key={i} componentString={data.toolkit[i]} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
