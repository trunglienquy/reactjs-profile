/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 coffee.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/coffee.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.225, 0]} rotation={[0, 0.245, 0]}>
        <mesh geometry={nodes['CupLid_Paint_Gloss_White_#2_0'].geometry} material={materials.Paint_Gloss_White_2} />
        <mesh geometry={nodes['paper-cup_color192192192_#2_0'].geometry} material={materials.color192192192_2} />
      </group>
    </group>
  )
}

useGLTF.preload('/coffee.gltf')