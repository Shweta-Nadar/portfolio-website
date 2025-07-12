import React, { Suspense, useEffect, useState } from 'react';
import Herotext from './herotext';
import Parallaxbg from './parallaxbg';
import { Headphones } from "./headphones";
import { Keyboard } from "./keyboard";
import { Laptop } from "./laptop";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

const Hero = () => {
  const [showModels, setShowModels] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    const timer = setTimeout(() => setShowModels(true), 1800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section id='home' className="relative h-[100vh] flex flex-col items-start justify-center px-6 ">
      <Herotext />
      <Parallaxbg />

      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          {showModels && (
            <>
              {/* 🎧 Headphones */}
              <Float speed={3} floatIntensity={1.5} rotationIntensity={0.3}>
                <group
                  position={isMobile ? [1.5, 1.5, -2] : [3, 2, -4]}
                  scale={isMobile ? 0.5 : 0.7}
                >
                  <Headphones />
                </group>
              </Float>

              {/* 💻 Laptop */}
              <Float speed={2} floatIntensity={1.5} rotationIntensity={0}>
                <group
                  position={isMobile ? [0.2, 0, 0.5] : [0.5, 0.3, 0.2]}
                  scale={isMobile ? 0.5 : 0.6}
                >
                  <Laptop />
                </group>
              </Float>

              {/* ⌨️ Keyboard */}
              <Float speed={1.5} floatIntensity={1} rotationIntensity={2}>
                <group
                  position={isMobile ? [-1.2, -1.4, 0.5] : [-1.8, -1, 0.5]}
                  scale={isMobile ? 0.4 : 0.5}
                >
                  <Keyboard />
                </group>
              </Float>
            </>
          )}
        </Suspense>

        {/* Optional: Enable OrbitControls on desktop only */}
         <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default Hero;
