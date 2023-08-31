import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";
import { useHelper} from "@react-three/drei";
import { CameraControls } from '../Camera';
import { Diary } from '../components/models/Diary';
import { Phone } from '../components/models/Phone';
import { WillPaper } from '../components/models/WillPaper';
import { usePlay } from '../contexts/Play';
import { BoardForLightingmap } from '../components/models/PlayerRoom/BoardForLightingmap';
import ModalOverlay from '../components/PlayerRoom/ModalOverlay';
import kakao_icon from '../assets/icons/kakao_icon.png'
import styled from 'styled-components';
import { Shelf } from '../components/models/Shelf';
import { Desktop } from '../components/models/Desktop';
import FriendListModal from '../components/PlayerRoom/FriendListModal';
import { Room } from '../components/models/PlayerRoom/Room';



export default function PlayerRoom() {
  const light1 = useRef()
  const light2 = useRef()

  const {focus, setFocus} = usePlay();
  const {friendList, setFriendList} = usePlay();

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
      position = { x: -5, y: 9, z: 3 };
      target = { x: -10, y: 4, z: 5 };
    } else if (idx === 2) {
      position = { x: 0, y: 9, z: 8 };
      target = { x: 0, y: 9, z: 10 };
    } else if (idx === 3) {
      position = { x: 3, y: 7, z: -8 };
      target = { x: 5, y: 4, z: -10 };
    } else if ( idx === 4) {
      position = { x: 10, y: 3, z: 5 };
      target = { x: 5, y: 0, z: 5 };
    } else if ( idx ===5) {
      position = { x: 50, y: 3, z: 5 };
      target = { x: 5, y: 0, z: 5 };
    } else if ( idx ===6) {
      position = { x: -10, y: 3, z: 5 };
      target = { x: 5, y: 0, z: 5 };
    }
    if(curIdx === idx) {
      setCamera()
    }

    if(idx!==10){
      setPosition(position)
      setTarget(target)
    }

  }

  useEffect(() => {
    if(curIdx !== 0 && curIdx !==10) {
      const delayFunc = setTimeout(() => {
        setFocus(true)
      }, 2500)

      return () => clearTimeout(delayFunc)
    }
    
  },[curIdx])



  const LightHelper = () => {
    useHelper(light1, DirectionalLightHelper, 1, "red");
    useHelper(light2, DirectionalLightHelper, 1, "blue");
  }



  return (
    <>
      <Canvas camera={{position:[20,8,0]}} colorManagement>
        {/* <LightHelper /> */}
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={0.1} />
        <directionalLight ref={light1} intensity={1.5}  decay={2} color="#eca864" position={[ 17, 12.421, -2]} target-position={[0, 9, 2]} />
        <directionalLight ref={light2} intensity={1.2} castShadow decay={2} color="#d8b58d" position={[22, 15.344, -5]} target-position={[2, 10, 0]} />
        <CameraControls position={position} target={target} />
        <group rotation-y={-Math.PI}>
          <Room/>
          <group onClick={() => handleClick(1)}>
            <WillPaper/>
          </group>
          <group ref={boardRef} onClick={() => handleClick(2)}>
            <BoardForLightingmap/>  
          </group>
          <group onClick={() => handleClick(3)}>
            <Phone/>
          </group>
          <group onClick={() => handleClick(4)}>
            <Diary/>
          </group>
          <group onClick={() => handleClick(5)}>
            <Shelf/>
          </group>
          <group onClick={() => handleClick(6)}>
            <Desktop/>
          </group>
        </group>
      </Canvas>
      {/* <Will/> */}
      { focus && <ModalOverlay setCamera={setCamera} curIdx={curIdx} />}


      {/* <div onClick={() => {handleClick(10); setFriendList(true)}}>
        <FriendListButton src={kakao_icon}/>
      </div>

      { friendList && <FriendListModal/> } */}

    </>

  )
}

const FriendListButton = styled.img`
  width: 5rem;
  height: 5rem;
  z-index:999;

`