import { useGSAP } from "@gsap/react";
import { socials } from ".";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useGSAP(() => {
    // Animate the right-side "Contact Me" heading
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animate each social section
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen">
      <div>
        {/* 🔥 RIGHT-ALIGNED TITLE */}
        <div className="flex justify-start px-10 mt-10">
          <h2
            ref={titleRef}
            className="text-white text-4xl md:text-5xl "
            style={{ fontFamily: "Montserrat" }}
          >
            Contact Me
          </h2>
        </div>

        {/* SOCIAL INFO */}
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10 mt-16">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                shwetanadar@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                9137126757
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
