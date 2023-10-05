/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 manRoom.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Man_Room(props) {
  const { nodes, materials } = useGLTF('/models/manRoom.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['drawer.001']} position={[3.65, 2.127, -9.723]} scale={[1.852, 1.821, 1.915]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.001']} position={[3.599, 5.541, 9.932]} rotation={[0, 1.372, 0]} scale={[0.508, 2.252, 0.508]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['book1.002']} position={[3.445, 3.085, -8.96]} rotation={[Math.PI, -1.125, Math.PI]} scale={[1, 0.866, 0.896]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.desk} position={[5.673, 4.498, 9.259]} rotation={[0, Math.PI / 2, 0]} scale={[0.707, 1, 1]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials.desk} position={[10.922, 2.126, 11.039]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube107.geometry} material={materials.radio} position={[3.481, 3.083, -5.192]} rotation={[0, -0.4, 0]} scale={[0.392, 0.504, 1.114]} />
      <mesh geometry={nodes.Cube112.geometry} material={materials.deskobject} position={[8.761, 5.139, 9.554]} scale={[1.626, 0.142, 0.795]} />
      <mesh geometry={nodes.Cube119.geometry} material={materials.lamp} position={[-1.691, 8.077, 9.75]} scale={[0.801, 1.416, 0.828]} />
      <mesh geometry={nodes.Cube122.geometry} material={materials.lamp2} position={[-1.691, 5.993, 9.692]} scale={[0.107, 5.495, 0.11]} />
      <mesh geometry={nodes.Cube125.geometry} material={materials.lamp2} position={[-1.691, 0.644, 9.722]} scale={[0.541, 0.32, 0.559]} />
      <mesh geometry={nodes.Cube127.geometry} material={materials['Material.007']} position={[14.977, 9.418, 0.372]} scale={[0.414, 4.009, 6.152]} />
      <mesh geometry={nodes.Cube128.geometry} material={materials['Material.006']} position={[-2.487, 2.858, 7.582]} rotation={[0, -1.025, 0]} scale={[0.741, 2.466, 1.36]} />
      <mesh geometry={nodes.Cube132.geometry} material={materials.closet} position={[-1.847, 8.579, -9.525]} scale={[2.674, 8.187, 1.878]} />
      <mesh geometry={nodes.Cube133.geometry} material={materials.stool} position={[3.473, 2.127, -5.115]} rotation={[0, 1.138, 0]} scale={[1.392, 0.665, 1.44]}>
        <mesh geometry={nodes.Cube134.geometry} material={materials.stool} position={[-0.448, -1.105, -0.477]} scale={[0.227, 1.95, 0.227]} />
      </mesh>
      <mesh geometry={nodes.Cube142.geometry} material={materials.deskobject} position={[4.735, 6.128, 8.989]} rotation={[-2.72, 0.175, 1.498]} />
      <mesh geometry={nodes.Plane011.geometry} material={materials.bed} position={[10.156, 3.988, -1.504]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube045.geometry} material={materials.deskobject} position={[1.113, 5.804, 10.3]} scale={[1.349, 0.827, 0.098]} />
      <group position={[-7.598, 4.179, -4.11]} rotation={[0.503, 0.78, 0.168]} scale={0.608}>
        <mesh geometry={nodes.Cube098.geometry} material={materials['table1.001']} />
        <mesh geometry={nodes.Cube098_1.geometry} material={materials.table1} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} position={[3.566, 3.793, -4.395]} rotation={[-0.767, -0.086, -0.227]} scale={[0.025, 0.594, 0.025]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.010']} position={[14.961, 9.426, 0.481]} rotation={[-0.003, 0.005, 1.571]} scale={[3.592, 1, 5.925]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['wall.001']} position={[-7.522, 2.948, -5.464]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-9.431, -0.174, -17.177]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.wall2} position={[-7.522, 2.948, -5.464]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-9.431, -0.174, -17.177]} />
    </group>
  )
}

useGLTF.preload('/models/manRoom.gltf')
