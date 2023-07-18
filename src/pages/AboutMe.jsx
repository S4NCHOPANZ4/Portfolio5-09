import React from 'react'
import AnimatedText from '../components/AnimatedText'
import { motion } from "framer-motion";
import IconMe from '../assets/svg-bg/drawing.svg'
//MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
//pdf
import resume from '../assets/resume/Juan_Buitrago.pdf'

import '../styles/aboutMe/index.scss'




const AboutMe = () => {  


  const handleOpenPDF = () => {
    window.open(resume, '_blank');
  };

  const goToLinkIn = () => {
    window.open(`https://www.linkedin.com/in/juan-d-buitrago/`, '_blank')
  }
  const goToGitHub = () => {
    window.open(`https://github.com/S4NCHOPANZ4`, '_blank')
  }

  const cardVariants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  const buttonVariants = {
    hovered: {
      scale: 1.1, 
    }
  }

  return (
    <div className='aboutMe_super'>
      <div className='aboutMe_title'>
        <AnimatedText 
        clase={'AboutMe_title_cc'}
        text={'About Me 🗿'}/>
      </div>
      <div className='aboutMe_body'>
        <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className='aboutMe_container aboutMe_sub1'>
          <div className='aboutMe_contentT'>
            <p>
                Hi, I'm Juan, a web developer in front-end and back-end development. 
                I specialize in HTML, CSS, JavaScript, React, and Node.js. 
                I enjoy building user-friendly websites and applications that engage users and meet their needs.
                <br/>
                <br/>
                When I'm not developing, you can find me exploring new technologies, playing video games, and cooking up a storm
                <span className='extra_txt'>{` (not literally) `}</span>
                . I'm always looking for ways to stay creative and bring fresh ideas to my work.
                <br/>
                <a onClick={handleOpenPDF}>Check out my resume!</a>  
              </p>
          </div>
          <div className='aboutMe_cont'>
            <motion.button variants={buttonVariants} whileHover="hovered" onClick={()=>{goToLinkIn()}}><LinkedInIcon className='linkIn_Icon'/></motion.button>
            <motion.button variants={buttonVariants} whileHover="hovered" onClick={()=>{goToGitHub()}}><GitHubIcon className='linkIn_Icon'/></motion.button>
            <motion.button variants={buttonVariants} whileHover="hovered" onClick={()=>{handleOpenPDF()}}><InsertDriveFileIcon className='linkIn_Icon'/></motion.button>            
          </div>
            
        </motion.div>
        <div className='aboutMe_container aboutMe_sub2'>
          <motion.div   variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"  className='img_container'>
            <img src={IconMe} alt="" />
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe