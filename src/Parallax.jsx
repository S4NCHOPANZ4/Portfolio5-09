import { useRef } from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Toolkit from './pages/Toolkit';
import Form from './pages/Form';
import Backgroundc from './components/Backgroundc';

import './styles/Parallax/index.css'

const ParallaxC = () => {
  const ref = useRef();

  const stylesCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    } 

  return (
    <>
      <Parallax  pages={5} ref={ref}>
      <div className='NavBar'>
        <div>
          <p
          onClick={() => ref.current.scrollTo(1)}
          >Projects</p>
        </div>
        <div>
          <p
          onClick={() => ref.current.scrollTo(3)}
          >About me</p>
        </div>
        <div>
          <p
          onClick={() => ref.current.scrollTo(4)}
          >Contact me</p>
        </div>
      </div>

        <Backgroundc/>
        <ParallaxLayer 
        style={{backgroundColor: 'black'}}
        offset={1}>
             <Projects/>
        </ParallaxLayer>
        <ParallaxLayer 
        style={{backgroundColor: 'black'}}
        offset={2}>
        <div style={stylesCenter}>

            <Toolkit/>
            </div>

        </ParallaxLayer>
        <ParallaxLayer 
        style={{backgroundColor: '#191919'}}
        offset={3}>
             <AboutMe/>
        </ParallaxLayer>
        <ParallaxLayer
        style={{backgroundColor: 'black'}}
        offset={4}>
            <div style={stylesCenter}>
                <Form/>
            </div>
        </ParallaxLayer>

      </Parallax>
    </>
  );
};

export default ParallaxC;