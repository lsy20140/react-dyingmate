import React, { useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import {Vector3} from "three";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { Board } from '../components/models/Board';
import { MainRoom } from '../components/models/MainRoom';
import { CameraControls } from '../Camera';
import { Diary } from '../components/models/Diary';
import { Phone } from '../components/models/Phone';
import { WillPaper } from '../components/models/WillPaper';
import Will from './Will';

export default function PlayerRoom() {
  const camera = useRef();  
  const boardRef = useRef();

  const navigate = useNavigate();
  const [curIdx, setCurIdx] = useState(0);

  const [position, setPosition] = useState({ x: 10, y: 3, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  const handleChange = (idx) => {
    let position = { x: 0, y: 3, z: 0 };
    let target = { x: 0, y: 0, z: 0 };
    setCurIdx(idx)

    if (idx === 1) {
      position = { x: 0, y: 3, z: 8 };
      target = { x: 0, y: 3, z: 10 };
    } else if (idx === 2) {
      position = { x: 20, y: 0, z: 20 };
      target = { x: 0, y: 0, z: 10 };
    } else if (idx === 3) {
      position = { x: 3, y: 1, z: -8 };
      target = { x: 5, y: -2, z: -10 };
    } else if ( idx === 4) {
      position = { x: -5, y: 3, z: 3 };
      target = { x: -10, y: -2, z: 5 };
    }
    if(curIdx === idx) {
      position = { x: 10, y: 3, z: 0 };
      target = { x: 0, y: 0, z: 0 };
    }

    setPosition(position)
    setTarget(target)
  }

  return (
    <>
      <Canvas camera={{position:[10,3,0]}}>
        <axesHelper args={[500, 500, 500]} />
        <directionalLight position={[5, 10, 0]} intensity={0.5} />
        <ambientLight intensity={0.1}/>
        <CameraControls position={position} target={target} />
        <group rotation-y={-Math.PI}>
          <MainRoom/>
          <group ref={boardRef} onClick={() => handleChange(1)}>
            <Board/>
          </group>
          <group onClick={() => handleChange(2)}>
            <Diary/>
          </group>
          <group onClick={() => handleChange(3)}>
            <Phone/>
          </group>
          <group onClick={() => handleChange(4)}>
            <WillPaper/>
          </group>
        </group>
        
        
      </Canvas>
      {/* <Will/> */}
    </>

  )
}

// 보드, 다이어리, 종이(유언장), 핸드폰, 신문, 