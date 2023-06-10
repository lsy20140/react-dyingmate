import './App.css';
import MainExperience from './components/MainExperience';
import { usePlay } from './contexts/Play';
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Overlay, Splash } from './pages/Splash';
import { Suspense } from 'react';
import NotFound from './pages/NotFound';



function App() {
  const {play, end} = usePlay();

  return (
  <>
    <Canvas>
      <color attach="background" arg={["#f59f9f"]} />
      <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <MainExperience />
        </ScrollControls>
        
    </Canvas>
    <Splash/>
    
  </>
  );
}

export default App;
