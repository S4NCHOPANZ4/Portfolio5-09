import React from 'react'
import { useRef } from "react";
import { motion} from "framer-motion";

  const cardVariants= {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: -1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

const AnimatedBg = () => {
  const constraintsRef = useRef(null);

  return (
    <div className='about_container container'>
   <motion.div
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}>
    <div className='card_bg'/>

    <motion.div 
    ref={constraintsRef}
    className="card" 
    drag dragConstraints={constraintsRef}
    variants={cardVariants}>
      <div className='innerCard'>
        <p className='innercard_Title'>About Me!</p>
        <p className='innerCard_Text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Excepturi dolores obcaecati laudantium nihil beatae ducimus temporibus. Ad, dolor sequi.
        Provident nesciunt nobis accusamus saepe dolorum hic qui minima consequatur unde. Iusto
        ullam cum obcaecati doloribus sint dolorem ut dolore voluptas!</p>
      </div>
  
    </motion.div>
    </motion.div>

    </div>
  
);
}

export default AnimatedBg