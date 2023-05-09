import React from 'react'
import {motion} from 'framer-motion'


const Cube = ({animateObj, styled, dragLimits, clase}) => {


  const cardVariants = {
    offscreen: {
      rotate: -360,
    },
    onscreen: {
      rotate: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <motion.div  
    viewport={{ once: true }}

    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen" 
    drag
    dragConstraints={dragLimits}
    style={styled}
    animate={animateObj}
    transition={{
      duration: .75,
      ease: "easeInOut",
      times: [0, 0.2, 1],
      
    }}
  
    whileTap={{  
    rotate: [0, 45, 0],
    
  }}
    className={'cube '+clase}></motion.div>
  )
}

export default Cube