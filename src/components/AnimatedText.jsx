import React from 'react'
import {motion} from 'framer-motion'

const AnimatedText = ({text, delay, clase, superClase}) => {
  const words = text.split(" ")
  const conatiner = {
    hidden: {opacity: 0},
    visible: (i = 1)=>({
        opacity: 1,
        transition: {staggerChildren: 0.12, delayChildren: 0.04 * i }, 
    }),
  }
  const child  ={
    visible:{
        opacity: 1,
        x: 0,
        transition: { 
            delay: delay,
            type: 'spring',
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: 20,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100,
        },
    }
  }
  return (
    <motion.div 
    style={{  display: "flex", fontSize: "2rem"}}
    variants={conatiner} 
    initial="hidden" 
    animate="visible"
    className={superClase}
    >
      {words.map((word, i) => (    
        <motion.div 
              className={clase}
              variants={child}
              style={{marginRight: '5px' }}
              whileHover={{
              y: -10
              }}
              key={i}>
              {word}
          </motion.div>
      ))}
    </motion.div>
  )
}


export default AnimatedText