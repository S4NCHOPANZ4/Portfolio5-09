import React from 'react'

import AnimatedText from '../components/AnimatedText'


const Cover = () => {

  return (
    <div className='container cover_container'>
      <div className='window' >
        <div className='greeting'>
          <div className='main__greeting'>
            <AnimatedText text={"Greetings!"} delay={0}  clase='cover_title'/>
            <AnimatedText text={"It's Juan"} delay={.3} clase='cover_title name'/>
          </div>
          <div className='desc__greeting'>
            <AnimatedText text={"Web Dev"} delay={.7} />

          </div>
        </div>
      </div>  
    </div>
  )
}

export default Cover