/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 House1.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function House1(props) {
  const { nodes, materials } = useGLTF('/models/House1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={50}>
        <mesh geometry={nodes.House_1_1.geometry} material={materials.Wood}/>
        <mesh geometry={nodes.House_1_2.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.House_1_3.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.House_1_4.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.House_1_5.geometry} material={materials.Windows} />
        <mesh geometry={nodes.House_1_6.geometry} material={materials.RoofTiles} />
        <mesh geometry={nodes.House_1_7.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.House_1_8.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.House_1_9.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/House1.glb')
