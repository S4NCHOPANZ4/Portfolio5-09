import { useEffect, useState } from "react";
import ParallaxC from "./Parallax";

function App() {

  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true)
    };
    window.onload = handleLoad;
    return () => {
      window.onload = null;
    };
  }, []);


  return (
    <>
      {loaded?
      <ParallaxC />
      :

      <div className="loader_super">
        <div className="loader"></div>
      </div>
      }
      
    </>
  );
}

export default App;
