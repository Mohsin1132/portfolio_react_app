/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf --transform
Author: Ehsan Abbasi (https://sketchfab.com/EhsanAbbasi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shoe-c91d1bc858784f9f86fff2a2efba03af
Title: Shoe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  default function Model(props) {
  const { nodes, materials } = useGLTF('/shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.95, 0]} rotation={[-Math.PI / 2, -0.44, -Math.PI / 2]} scale={0.12}>
        <mesh geometry={nodes.Shoe_Shoe_New2_0.geometry} material={materials.Shoe_New2} />
        <mesh geometry={nodes['Shoe_21_-_Default_0'].geometry} material={materials['21_-_Default']} />
      </group>
    </group>
  )
}

useGLTF.preload('/shoe-transformed.glb')
