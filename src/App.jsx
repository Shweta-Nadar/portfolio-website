import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero"; 
import About from "./About"; 
import Projects from "./Projects";
import Experience from "./Experience";
import ServiceSummary from './ServiceSummary';
import ReactLenis from 'lenis/react';
import { useProgress } from "@react-three/drei";
import Contact from './Contact';

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  return (
    <>
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p style={{fontFamily:"Quicksand"}} className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div
        className={`${isReady ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
      >
        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <ServiceSummary />
        <Contact/>
        {/* <section className='min-h-screen'></section>
        <section className='min-h-screen'></section> */}
      </div>
    </>
  );
};

export default App;
