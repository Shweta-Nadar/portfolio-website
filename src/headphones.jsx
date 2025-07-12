import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export function Headphones(props) {
  const { nodes } = useGLTF('/floating_futuristic_h_0624081835_texture.glb');

  const { position } = useSpring({
    from: { position: [0, 20, 0] },  // start way up
    to: { position: [0, -1, 0] },   // end at visible level
    config: { tension: 80, friction: 12 },
  });

  return (
    <animated.group position={position} scale={3} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </animated.group>
  );
}

useGLTF.preload('/floating_futuristic_h_0624081835_texture.glb');
