import MainExperience from '../components/MainExperience';
import { usePlay } from '../contexts/Play';
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Box } from "@react-three/drei";
import MapOverlay from '../components/MapOverlay';
import { Overlay } from './Overlay';



function Main() {
  const {play, end} = usePlay();
  
  return (
  <>
    <Canvas>
      <color attach="background" arg={["#f59f9f"]} />
      <ScrollControls
        pages={play && !end ? 100 : 0}
        damping={1}
      >
      <MainExperience />
      </ScrollControls>
    </Canvas>
    <Overlay/>
    <MapOverlay/>
    
  </>
  );
}

export default Main;
