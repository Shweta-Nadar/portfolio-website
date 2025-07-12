import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close on Esc key
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [closeModal]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-[90%] max-w-2xl max-h-[90vh] flex flex-col overflow-hidden
                     rounded-2xl border border-white/10 shadow-sm
                     bg-gradient-to-l from-midnight to-navy"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 p-2 rounded-sm bg-midnight hover:bg-grey-500"
          >
            <img src="/close.svg" alt="close" className="w-6 h-6" />
          </button>

          {/* Scrollable Column */}
          <div className="flex-1 overflow-y-auto px-5 pb-6">
            <img
              src={image}
              alt={title}
              className="w-4/5 max-w-md mx-auto mt-6 rounded-xl"
            />

            <div className="mt-6">
              <h6
                className="mb-2 text-2xl font-bold text-white"
                style={{ fontFamily: "Montserrat" }}
              >
                {title}
              </h6>

              <p
                className="mb-3 font-normal text-neutral-400"
                style={{ fontFamily: "Montserrat" }}
              >
                {description}
              </p>

              {subDescription.map((txt, i) => (
                <p
                  key={i}
                  className="mb-3 font-normal text-neutral-400"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {txt}
                </p>
              ))}

              {/* Tags + Link */}
              <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <img
                      key={tag.id}
                      src={tag.path}
                      alt={tag.name}
                      className="size-10 rounded-lg hover-animation"
                    />
                  ))}
                </div>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-white hover-animation"
                  style={{ fontFamily: "Montserrat" }}
                >
                  View Project
                  <img
                    src="/arrow-up.svg"
                    alt="arrow up"
                    className="size-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
