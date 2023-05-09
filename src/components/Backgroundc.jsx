import React from 'react'
import { ParallaxLayer} from '@react-spring/parallax';

import bg4 from '../assets/svg-bg/bg-4.svg'
import bg3 from '../assets/svg-bg/bg-3.svg'
import bg2 from '../assets/svg-bg/bg-2.svg'
import bg1 from '../assets/svg-bg/bg-1.svg'
import Cover from '../pages/Cover';

const Backgroundc = () => {
  return (
    <>
        <ParallaxLayer offset={0}
        factor={1.2}
        speed={-.6}
        style={{
            zIndex: '-2',
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Cover/>

        </ParallaxLayer>
        
        <ParallaxLayer offset={0}
        factor={1.3}
        speed={.26}
        style={{
            zIndex: '-1',
            backgroundImage: `url(${bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

        </ParallaxLayer>
        
         <ParallaxLayer offset={0}
        factor={1.1}
        speed={.1}
        style={{
            zIndex: '-1',
            backgroundImage: `url(${bg3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0}
        factor={1.01}
        speed={0}
        style={{
            zIndex: '-1',
            backgroundImage: `url(${bg4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        </ParallaxLayer>
    </>
  )
}

export default Backgroundc