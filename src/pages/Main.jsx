import MainExperience from '../components/MainExperience';
import { usePlay } from '../contexts/Play';
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Box } from "@react-three/drei";
import { Overlay } from './Overlay';



function Main() {
  const {play, end} = usePlay();
  
  return (
  <>
    <Canvas>
      <color attach="background" arg={["#f59f9f"]} />
      <ScrollControls
        pages={play && !end ? 100 : 0}
        damping={0.1}
      >
      <MainExperience />
      </ScrollControls>

    </Canvas>
    <Overlay/>
    
  </>
  );
}

export default Main;
