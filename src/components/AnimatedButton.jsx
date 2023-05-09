import React from 'react'
import {motion} from 'framer-motion'


const AnimatedButton = ({text, arrow, clase, type}) => {
  return (
    <motion.button
    type={type? type: ''}
    className={clase}
    style={{
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center'
        
    }}
    initial={{ y: 100}}
    animate={{
        opacity: [0, 1],
        y: 0
    }}
    
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 400,  duration:1}}
    >
        {text}
    {arrow?<div >{arrow}</div> : null}
    </motion.button>
  )
}

export default AnimatedButton