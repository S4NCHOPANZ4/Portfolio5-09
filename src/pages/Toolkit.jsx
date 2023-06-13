import React, { useRef } from 'react'
import '../styles/toolKit/index.css'
import AnimatedText from '../components/AnimatedText';
import Cube from '../components/AnimatedCube';

const Toolkit = () => {

const constraintsRef = useRef(null);

const generateGrid = () => {
    const grid = [];    
    for(let i = 1; i <= 8; i++) {
        grid.push(<Cube 
          dragLimits={constraintsRef}
          clase={`ToolKit_grid grid${i}`} key={i}></Cube>)
    }
    return grid;
}

  return (
    <div className='Toolkit__super'>

         <div className='toolkit_tt'>
        <AnimatedText
        clase={'toolkit_t'}
        text={' My ToolKit 🔧'}/>
             <div className='ToolKit_dm_c'>
              <p className='Toolkit_dragMe'>🫳 Try dragging them 🫳</p>
            </div>
      </div>
        <div className='Toolkit_Container'>
            <div className='Toolkit_SubContainer' ref={constraintsRef}>
                {generateGrid()}
            </div>
       
        </div>
        
    </div>
  )
}

export default Toolkit