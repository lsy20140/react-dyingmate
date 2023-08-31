import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { Room } from '../components/models/FirstRoom/Room';

export default function FirstRoom() {
  return (
    <>
      <Canvas camera={{position:[20,8,0]}} colorManagement>
        {/* <LightHelper /> */}
        <axesHelper args={[200, 200, 200]} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={1}  decay={2} color="#eca864" position={[ 17, 12.421, -2]} target-position={[0, 9, 2]} />
        <directionalLight intensity={1.2} castShadow decay={2} color="#d8b58d" position={[22, 15.344, -5]} target-position={[2, 10, 0]} />
        <group rotation-y={-Math.PI}>
          <Room/>
        </group>
      </Canvas>
    </>
  )
}
