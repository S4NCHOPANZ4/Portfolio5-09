import React, { useState } from "react";
//MaterialUI
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
//framer-motion
import { motion } from "framer-motion";
//img
import "../styles/projects/index.scss";
import AnimatedText from "../components/AnimatedText";
import p1 from "../assets/svg-p/project_1.png";
import p2 from "../assets/svg-p/project_2.png";
import p3 from "../assets/svg-p/project_3.png";

import newEggIcon from "../assets/project-icons/newEggIcon.png";
import asciiicon from "../assets/project-icons/asci.png";
import leagueTrackerIcon from "../assets/project-icons/lt.png";
import nApiIcon from "../assets/project-icons/Napi.png";
import pomodoroIcon from "../assets/project-icons/mode1_icon.png";

import { BiLogoReact } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import { GrNode } from "react-icons/gr";
import { FaCcStripe, FaCcPaypal } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";

const divVariants = {
  hover: {
    rotate: 360,
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {


  const projects = [
    {
      demo: "lol-tracker-v1",
      github: "S4NCHOPANZ4/RiotAPi",
    },
    {
      demo: "pomodoros-puce",
      github: "S4NCHOPANZ4/pomodoros"
    },
        
    {
      demo: "new-egg-ecomerce-y9so",
      github: "S4NCHOPANZ4/newEgg_Ecomerce/tree/main"
    },
    {
      demo: "ascii-converter-sepia",
      github: "S4NCHOPANZ4/ASCII-converter",
    },
    {
      demo: "nasa-ap-is-cheks",
      github: "S4NCHOPANZ4/NASA_APIs-cheks",
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
        <AnimatedText clase={"Projects_title_cc"} text={"My Projects  📄"} />
      </div>
      <div className="projects__grid_container">
        <div className="project_card project_card_1">
          <div className="project_card_icon">
            <img src={leagueTrackerIcon} alt="" />
          </div>
          <div className="project_desc">
            <p>
              React app utilizing the Riot Games API to explore match
              information, discover top players on different servers, and view
              your own or your friends' matches.
            </p>
            <div className="project_links">
              <RxOpenInNewWindow 
              onClick={() => goToDemo(projects[0].demo)}
              size={20} />
              <AiFillGithub
              onClick={() => goToGitHub(projects[0].github)}
              size={20} />
            </div>
          </div>
          <div className="toolkits">
            <BiLogoReact className="tools" size={35} />
            <TbApi className="tools" size={35} />
            <FaSass className="tools" size={35} />
          </div>
        </div>
        <div className="project_card project_card_2">
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
              onClick={() => goToDemo(projects[1].demo)}
              size={20} />
              <AiFillGithub 
              onClick={() => goToGitHub(projects[1].github)}
              size={20} />
            </div>
          </div>
          <div className="toolkits">
            <BiLogoReact className="tools" size={35} />
            <BiLogoTypescript className="tools" size={35} />
            <FaSass className="tools" size={35} />
          </div>
        </div>
        <div className="project_card project_card_3">
          <div className="project_card_icon">
            <img src={newEggIcon} alt="" />
          </div>
          <div className="project_desc">
            <p>
              Explore our innovative React e-commerce app. Shop securely with
              PayPal and Stripe. Discover a wide range of dummy products as we
              work to perfect the ultimate shopping destination (under
              development).
            </p>
            <div className="project_links">
              <RxOpenInNewWindow 
              onClick={() => goToDemo(projects[2].demo)}
              size={20} />
              <AiFillGithub 
              onClick={() => goToGitHub(projects[2].github)}
              size={20} />
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
        <div className="project_card project_card_4">
          <div className="project_card_icon">
            <img src={asciiicon} alt="" />
          </div>
          <div className="project_desc">
            <p>
              Unleash your creativity with our captivating React app that
              converts images into mesmerizing ASCII art
            </p>
            <div className="project_links">
              <RxOpenInNewWindow 
              onClick={() => goToDemo(projects[3].demo)}
              size={20} />
              <AiFillGithub 
              onClick={() => goToGitHub(projects[3].github)}
              size={20} />
            </div>
          </div>
          <div className="toolkits">
            <BsCameraVideoFill className="tools" size={33} />
            <BiLogoTypescript className="tools" size={33} />
            <FaSass className="tools" size={33} />
          </div>
        </div>
        <div className="project_card project_card_5">
          <div className="project_card_icon">
            <img src={nApiIcon} alt="" />
          </div>
          <div className="project_desc">
            <p>
              React app with NASA API. Serene satellite images. Discover cosmic
              beauty effortlessly
            </p>
            <div className="project_links">
              <RxOpenInNewWindow 
              onClick={() => goToDemo(projects[4].demo)}
              size={20} />
              <AiFillGithub 
              onClick={() => goToGitHub(projects[4].github)}
              size={20} />
            </div>
          </div>
          <div className="toolkits">
            <BiLogoReact className="tools" size={30} />
            <BiLogoTypescript className="tools" size={30} />
            <FaSass className="tools" size={30} />
            <TbApi className="tools" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

