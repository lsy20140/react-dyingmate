import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { GMHome } from '../components/models/GrandmaRoom/GrandmaRoom';
import {OrbitControls} from '@react-three/drei'
import CharInitDialog from '../components/ui/CharInitDialog';
import { CameraControls } from '../Camera';
import { useRoomFocus } from '../contexts/RoomFocus';
import { Test_sofa } from '../components/models/GrandmaRoom/Test_sofa';
import { HueSaturation } from '@react-three/postprocessing'
import { Grandmother } from '../components/models/GrandmaRoom/Grandmother';
// import { BlendFunction } from 'postprocessing'

export default function GrandmaRoom() {
  const dialogRef = useRef();
  const roomRef = useRef();
  const {focus} = useRoomFocus();

  const [position, setPosition] = useState({ x: 24, y: 8, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });


  useEffect(() => {
    console.log("GrandmaRoomfocus", focus)
    console.log("dialogRef",dialogRef);
    if(focus) {
      console.log("focus!!!")
      setPosition({ x: 0, y: 3, z: 1 });
      setTarget({ x: -4, y: 0, z: 0 });
    }
  },[focus])



  return (
    <>
      <Canvas camera={{fov: 30, position:[24,8,0]}}>
        <OrbitControls/>
        {/* <LightHelper /> */}
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={5} />
        <directionalLight intensity={8}  decay={1} color="#daae73" position={[ 5, 8, -2]} target-position={[-5, 8, 2]} />
        <directionalLight intensity={3} castShadow decay={2} color="#d8b58d" position={[5, 8, -5]} target-position={[2, 10, 0]} />
        <CameraControls position={position} target={target} />
        <group ref={roomRef} rotation-y={-Math.PI} rotation-z={-Math.PI/10} position-y={-5}>
          <GMHome/>
        </group>        
        <group>
          <Grandmother />
        </group>
      </Canvas>
      {/* {!focus && <CharInitDialog />} */}
      
    </>
  )
}
