import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const containerRef = useRef();
useGSAP(() => {
  const elements = containerRef.current.querySelectorAll(".animated-title");

  ScrollTrigger.matchMedia({
    /* 🖥️ desktop / tablet (unchanged) */
    "(min-width: 768px)": () => {
      elements.forEach((el, idx) => animateTitle(el, idx, 12, 0.6));
    },

    /* 📱 mobile – larger drift, extra‑smooth */
    "(max-width: 767px)": () => {
      elements.forEach((el, idx) => {
        if (el.id === "title-center") return;

        gsap.to(el, {
          xPercent: (idx % 2 === 0 ? 1 : -1) * (15 + idx * 3),
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "bottom 10%",
            scrub: 1.2,              // longer smoothing
            invalidateOnRefresh: true,
          },
        });
      });
    },
  });

  function animateTitle(el, idx, baseShift, scrubVal) {
    if (el.id === "title-center") return;
    gsap.to(el, {
      xPercent: (idx % 2 === 0 ? 1 : -1) * (baseShift + idx * 1.5),
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 20%",
        scrub: scrubVal,
        invalidateOnRefresh: true,
      },
    });
  }
}, []);

  return (
    <section
  ref={containerRef}
  className="mt-28 mb-36 px-6 text-center font-light leading-snug text-white space-y-12"
>

      <div
        id="title-1"
        className="animated-title text-3xl md:text-5xl tracking-wide text-white/70 font-normal"
        style={{ fontFamily: "Montserrat" }}
      >
        <p>Synergy</p>
      </div>

      {/* 2. Aligned Goals | Growth */}
      <div
        id="title-2"
        className="animated-title flex flex-wrap items-center justify-center gap-4 text-2xl md:text-4xl text-white/70 font-normal"
        style={{ fontFamily: "Montserrat" }}
      >
        <p>Aligned Goals</p>
        <div className="w-6 h-1 md:w-16 bg-white rounded-full" />
        <p>Growth</p>
      </div>

      {/* 💎 CENTERPIECE: Let’s Collaborate */}
      <div
  id="title-center"
  className="relative text-5xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d5b3ff] to-white animate-fadeInSlow"
  style={{ fontFamily: "Montserrat" }}
>
  {/* subtle glow backdrop */}
  <div className="absolute -inset-1 blur-2xl bg-[#d5b3ff]/20 rounded-full z-0"></div>
  
  <p className="relative z-10">Let’s Collaborate</p>
</div>

      {/* 4. Interactive UI | Flexible Dev */}
      <div
        id="title-4"
        className="animated-title flex flex-wrap items-center justify-center gap-4 text-2xl md:text-4xl text-white/70 font-normal"
        style={{ fontFamily: "Montserrat" }}
      >
        <p>Creative Sync</p>
        <div className="w-6 h-1 md:w-16 bg-white rounded-full" />
        <p>Aligned Goals</p>
      </div>

      {/* 5. Scalable Systems */}
      <div
        id="title-5"
        className="animated-title text-3xl md:text-5xl tracking-wide text-white/70 font-normal"
        style={{ fontFamily: "Montserrat" }}
      >
        <p>Shared Vision</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
