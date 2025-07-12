import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Frameworks } from './Frameworks';
import CopyEmailButton from './CopyEmailButton';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const cardsRef   = useRef([]);          // ⬅️ NEW – hold card nodes
/* ---------- GSAP LOGIC ---------- */
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    /* --- INITIAL STATE --- */
    gsap.set(cardsRef.current, { y: 80, opacity: 0 });

    /* === TITLE ANIMATION === */
    const titleAnim = gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      paused: true,
    });

    /* === CARDS TIMELINE === */
    const cardsTL = gsap.timeline({ delay: 1 })
      .to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      });

    /* === RESPONSIVE TRIGGERS === */
    ScrollTrigger.matchMedia({
      // desktop / tablet
      "(min-width: 768px)": () => {
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 85%",
          animation: titleAnim,
          toggleActions: "restart none none reset",
        });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          animation: cardsTL,
          toggleActions: "restart none none reset",
        });
      },

      // phones
      "(max-width: 767px)": () => {
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 90%",
          animation: titleAnim,
          toggleActions: "restart none none reset",
        });
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 85%",
          animation: cardsTL,
          toggleActions: "restart none none reset",
        });
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);
  /* ---------- JSX ---------- */
  return (
    <section id="about" ref={sectionRef} className="c-space section-spacing">
      <h2 ref={titleRef} className="text-heading font-montserrat">
        About Me
      </h2>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Card 1 */}
        <div
          ref={el => (cardsRef.current[0] = el)}   // ⬅️ NEW
         className="
  group flex items-end grid-default-color grid-1 overflow-hidden
  transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:scale-105
bg-cover md:bg-cover sm:bg-contain bg-center bg-no-repeat
"          style={{ backgroundImage: "url('/btsbg.png')", backgroundSize: 'cover' }}
        >
            <div className="z-10">
            <p className="headtext" style={{ fontFamily: 'Montserrat' }}>
              Hi, I am Shweta!
            </p>
            <p className="subtext" style={{ fontFamily: 'Montserrat' }}>
              The girl who went from Googling “what’s a div?” to animating 3D
              scenes with Three.js and GSAP. I started with C# at 16, explored
              C, C++, and Python — now I craft sleek, interactive frontends with
              React and Tailwind. Currently diving into Node, MongoDB, and
              backend tools like Appwrite to bring it all together.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={el => (cardsRef.current[1] = el)}   // ⬅️ NEW
          className="grid-special-color grid-2"
        >
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext" style={{ fontFamily: 'Montserrat' }}>
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={el => (cardsRef.current[2] = el)}   // ⬅️ NEW
          className="relative grid-black-color bg-[#9F7AEA] grid-3"
        >
           <div className="z-10 w-[50%]">
            <p className="headtext" style={{ fontFamily: 'Montserrat' }}>
              Tech Stack
            </p>
            <p className="subtext" style={{ fontFamily: 'Montserrat' }}>
              My journey began with C#, C++, and Python — now I build dynamic
              UIs with React, Tailwind, Three.js, and GSAP. I work with Node.js,SQL,and backend tools like Appwrite for full-stack web
              apps.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
