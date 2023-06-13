import { useRef } from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Toolkit from './pages/Toolkit';
import Form from './pages/Form';
import Backgroundc from './components/Backgroundc';
import sep from './assets/svg-bg/sep.svg'
import sep2 from './assets/svg-bg/sep2.svg'


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
     
      <Parallax  className='super_parallax' pages={5} ref={ref}
     >
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
        className='projects_parallax'
        style={{background: '#F1E5DE'}}
        offset={1}
        factor={1}
        >
             <Projects/>
 
        </ParallaxLayer>
        <ParallaxLayer 
        style={{background: '#FAFAFA'}}
        offset={2}>
          <div className='toolkit_img_sep'>
            <img src={sep} alt="" />
          </div>
        <div style={stylesCenter}>

            <Toolkit/>
            </div>

        </ParallaxLayer>
        <ParallaxLayer 
        style={{backgroundColor: '#FAFAFA'}}
        offset={3}>
             <AboutMe/>
        </ParallaxLayer>
        <ParallaxLayer
        style={{backgroundColor: '#4f220e16'}}
        offset={4}>
        <div className='toolkit_img_sep'>
            <img src={sep2} alt="" />
          </div>
            <div style={stylesCenter}>
                <Form/>
            </div>
        </ParallaxLayer>

      </Parallax>
    </>
  );
};

export default ParallaxC;