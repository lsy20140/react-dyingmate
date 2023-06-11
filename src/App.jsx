import './App.css';
import MainExperience from './components/MainExperience';
import { usePlay } from './contexts/Play';
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Splash } from './pages/Splash';



function App() {
  const {play, end} = usePlay();

  return (
  <>
    <Canvas>
      <color attach="background" arg={["#f59f9f"]} />
      <ScrollControls
          pages={play && !end ? 30 : 0}
          damping={2}

        >
          <MainExperience />
      </ScrollControls>
        
    </Canvas>
    <Splash/>
    
  </>
  );
}

export default App;
