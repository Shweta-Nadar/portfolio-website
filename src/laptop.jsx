import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/A_modern_floating_lap_0624081107_texture.glb');

  // Falling animation like headphones
  const { position } = useSpring({
    from: { position: [0, 5, 0] },  // Start higher up
    to: { position: [0, -1, 0] },   // Fall to ground
    config: { tension: 80, friction: 14 },
  });

  return (
    <animated.group position={position} scale={2.5} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </animated.group>
  );
}

useGLTF.preload('/A_modern_floating_lap_0624081107_texture.glb');
