import React, { useState, useRef } from 'react';
import ProjectDetails from './ProjectDetails';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
  const [isHidden, setIsHidden] = useState(false);
  const projectRef = useRef(null); // 👈 create a ref for this specific project block

  // GSAP animation
useGSAP(() => {
  if (!projectRef.current) return;

  // create a tween but keep it paused
  const tween = gsap.from(projectRef.current, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    paused: true,
  });

  // make a dedicated ScrollTrigger that controls that tween
  ScrollTrigger.create({
    trigger: projectRef.current,
    start: 'top 85%',
    animation: tween,
    toggleActions: 'restart none none reset', // replay every time
  });

  // optional: tidy up on unmount
  return () => {
    tween.kill();
  };
}, []);   // 👈 keep deps empty so this runs once

  return (
    <>
      <div
        ref={projectRef}
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview && setPreview(image)}
        onMouseLeave={() => setPreview && setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          style={{ fontFamily: 'Montserrat' }}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read more
          <img src="/arrow-right.svg" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
