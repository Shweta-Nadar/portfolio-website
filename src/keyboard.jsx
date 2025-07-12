import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Keyboard(props) {
  const { nodes, materials } = useGLTF('/futuristic_mouse_glo_0624082900_texture.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/futuristic_mouse_glo_0624082900_texture.glb')
