import React, { useMemo, useRef } from 'react'
import { usePlay } from '../contexts/Play';
import { useFrame } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";





export default function MainExperience() {

  const sceneOpacity = useRef(0);
  const lastScroll = useRef(0);

  const { play, setHasScroll, end, setEnd } = usePlay();

  useFrame((_state, delta) => {
    // 스크롤 감지되면 play
    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    if (end) {
      return;
    }

  }, []);

  // useEffect(() => {
  //   if (play) {
  //     planeInTl.current.play();
  //   }
  // }, [play]);


  return useMemo(() => (
    <>
      <axesHelper args={[500, 500, 500]} rotation={[0, -1.395, 0]} />
      <OrbitControls/>

    
    </>
  )
  )
}
