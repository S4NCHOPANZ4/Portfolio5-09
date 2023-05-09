import React from 'react'
//MaterialUI 
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
//framer-motion
import { motion } from "framer-motion";
//img
import '../styles/projects/index.css'
import AnimatedText from '../components/AnimatedText';


const divVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: .5,
        ease: "easeInOut",
      },
    },
  };

const Projects = () => {


    const cardVariants = {
        offscreen: {
          y: 300,
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

const goToDemo = (deployment, urlplus) => {
        window.open(`https://${deployment}.vercel.app${urlplus? urlplus: ''}`, '_blank')
}
const goToGitHub = (deployment) => {
    window.open(`https://github.com/${deployment}`, '_blank')
}



  return (
    <div className='projects__super'>
      <div className='aboutMe_title'>
        <AnimatedText
        clase={'AboutMe_title_cc'}
        text={'< My Projects />'}/>
      </div>
        <div className='projects__container'>
            <motion.div 
            variants={cardVariants}
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once: true }}
            className='projects_container_part part1'>
                <div className='part_hover'>
                    <p className='project_desc'>
                   Web application that uses <span className='project_resalted'>NASA's API</span> , <span className='project_resalted'>React</span> , and <span className='project_resalted'>Typescript</span> to provide users with an interactive and educational way to explore the Earth. The application utilizes NASA's satellite imagery to provide a unique and stunning view of our planet.
                    </p>
                    <div className='buttons_hover'>
                    <div
                    onClick={()=>{goToDemo("nasa-ap-is-cheks")}} 
                    className='hover_cirle part_button'>
                        <motion.div 
                        className='sub_icon'
                        variants={divVariants}        
                        whileHover="hover">
                            <OpenInNewIcon  className='part_icon'/>
                        </motion.div>
                    </div>
                    <div 
                    onClick={()=>{goToGitHub("S4NCHOPANZ4/NASA_APIs-cheks")}} 
                    className='hover_cirle part_button'>
                        <motion.div
                        className='sub_icon'
                        variants={divVariants}
                        whileHover="hover">
                            <GitHubIcon className='part_icon'/> 
                        </motion.div>
                    </div>
                    </div>
                  
                </div>
            </motion.div>
            <motion.div 
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className='projects_container_part part2'>
            <div className='part_hover'>
                    <p className='project_desc'>
                    Web application created on  <span className='project_resalted'>TypeScript</span> , <span className='project_resalted'>React</span> , and <span className='project_resalted'>Node.js</span> 
                    It's an app to report and address work environment issues, empowering employees to improve their workplace conditions. <br/>
                    <span className='project_resalted'>Mail: </span> ethan.murphy@example.com <br/>
                    <span className='project_resalted'>password:</span> Hvfbgn@!vfbfhjyy3545
                    </p>
                    <div className='buttons_hover'>
                    <div 
                    onClick={()=>{goToDemo("dev-whistler-app", "/login")}} 
                    className='hover_cirle part_button'>
                        <motion.div 
                        className='sub_icon'
                        variants={divVariants}
                        whileHover="hover">
                            <OpenInNewIcon  className='part_icon'/>
                        </motion.div>
                    </div>
                    <div 
                    onClick={()=>{goToGitHub("WMAD-0522-Final-Project")}} 
                    className='hover_cirle part_button'>
                        <motion.div
                        className='sub_icon'
                        variants={divVariants}
                        whileHover="hover">
                            <GitHubIcon className='part_icon'/> 
                        </motion.div>
                    </div>
                    </div>

                </div>
            </motion.div>
            <motion.div 
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen" 
            viewport={{ once: true }}
            className='projects_container_part part3'>
            <div className='part_hover'>
                    <p className='project_desc'>
                   Web application that uses <span className='project_resalted'>NASA's API</span> , <span className='project_resalted'>React</span> , and <span className='project_resalted'>Typescript</span> to provide users with an interactive and educational way to explore the Earth. The application utilizes NASA's satellite imagery to provide a unique and stunning view of our planet.
                    </p>
                    <div className='buttons_hover'>

                    <div 
                    className='hover_cirle part_button'>
                        <motion.div 
                        className='sub_icon'
                        variants={divVariants}
                        whileHover="hover">
                            <OpenInNewIcon  className='part_icon'/>
                        </motion.div>
                    </div>
                    <div className='hover_cirle part_button'>
                        <motion.div
                        className='sub_icon'
                        variants={divVariants}
                        whileHover="hover">
                            <GitHubIcon className='part_icon'/> 
                        </motion.div>
                    </div>
                    </div>

                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Projects