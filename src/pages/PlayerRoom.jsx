import React, { useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { SpotLightHelper, DirectionalLightHelper } from "three";
import {OrbitControls, PerspectiveCamera, useHelper} from "@react-three/drei";
import { Board } from '../components/models/Board';
import { CameraControls } from '../Camera';
import { Diary } from '../components/models/Diary';
import { Phone } from '../components/models/Phone';
import { WillPaper } from '../components/models/WillPaper';
import Will from './Will';
import { Room } from '../components/models/PlayerRoom/Room';
import { usePlay } from '../contexts/Play';
import StartModal from '../components/PlayerRoom/StartModal';

export default function PlayerRoom() {
  const {focus, setFocus} = usePlay();

  const boardRef = useRef();

  const [curIdx, setCurIdx] = useState(0);

  const [position, setPosition] = useState({ x: 20, y: 8, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });

  const setCamera = () => {
    setPosition({ x: 10, y: 9, z: 0 })
    setTarget({ x: 0, y: 6, z: 0 })
    setCurIdx(0)
  }
  

  const handleClick = (idx) => {
    let position = { x: 0, y: 0, z: 0 };
    let target = { x: 0, y: 0, z: 0 };
    setCurIdx(idx)

    if (idx === 1) {
      position = { x: 0, y: 9, z: 8 };
      target = { x: 0, y: 9, z: 10 };
    } else if (idx === 2) {
      position = { x: 20, y: 6, z: 20 };
      target = { x: 0, y: 6, z: 10 };
    } else if (idx === 3) {
      position = { x: 3, y: 7, z: -8 };
      target = { x: 5, y: 4, z: -10 };
    } else if ( idx === 4) {
      position = { x: -5, y: 9, z: 3 };
      target = { x: -10, y: 4, z: 5 };
    }
    if(curIdx === idx) {
      setCamera()
    }

    setPosition(position)
    setTarget(target)
  }

  useEffect(() => {
    if(curIdx !== 0) {
      const delayFunc = setTimeout(() => {
        setFocus(true)
      }, 2500)

      return () => clearTimeout(delayFunc)
    }
  },[curIdx])

  return (
    <>
      <Canvas camera={{position:[20,8,0]}}>
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={0.5} />
        <CameraControls position={position} target={target} />
        <group rotation-y={-Math.PI}>
          <Room/>
          <group ref={boardRef} onClick={() => handleClick(1)}>
            <Board/>
          </group>
          <group onClick={() => handleClick(2)}>
            <Diary/>
          </group>
          <group onClick={() => handleClick(3)}>
            <Phone/>
          </group>
          <group onClick={() => handleClick(4)}>
            <WillPaper/>
          </group>
        </group>
      </Canvas>
      {/* <Will/> */}
      { focus && <StartModal setCamera={setCamera}/>}
    </>

  )
}

// 보드, 다이어리, 종이(유언장), 핸드폰, 신문, 