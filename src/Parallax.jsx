import { useRef } from "react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Toolkit from "./pages/Toolkit";
import Form from "./pages/Form";
import Backgroundc from "./components/Backgroundc";
import sep from "./assets/svg-bg/sep.svg";
import sep2 from "./assets/svg-bg/sep2.svg";

const ParallaxC = () => {
  const ref = useRef();

  const stylesCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <>
      <Parallax className="super_parallax" pages={5.9} ref={ref}>
        <div className="NavBar">
          <div>
            <p onClick={() => ref.current.scrollTo(2.6)}>Projects</p>
          </div>
          <div>
            <p onClick={() => ref.current.scrollTo(1.5)}>About me</p>
          </div>
          <div>
            <p onClick={() => ref.current.scrollTo(4.7)}>Contact me</p>
          </div>
        </div>

        <Backgroundc />

        <ParallaxLayer
          style={{
            background: "#FAFAFA",
            boxShadow: "rgba(0, 0, 0, .2) 0px 100px 40px -28px inset",
          }}
          offset={1}
          factor={1.5}
        >
          <div className="toolkit_img_sep">
            <img src={sep} alt="" />
          </div>
          <div  style={
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }
          }>
            <AboutMe />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="projects_parallax"
          style={{ background: "#F9F9F9" }}
          offset={2.5}
          factor={1.2}
        >
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer style={{ backgroundColor: "#FAFAFA" }} 
        offset={3.55}>
          <div style={stylesCenter}>
            <Toolkit />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ backgroundColor: "#FAFAFA" }} 
        offset={4.5}
        factor={1.4}
        >

          <div style={stylesCenter}>
            <Form />
          </div>
        </ParallaxLayer>

        
      </Parallax>

    </>
  );
};

export default ParallaxC;
