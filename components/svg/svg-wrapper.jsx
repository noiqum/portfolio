import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Svgwrapper({ children, margin, className }) {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: margin ?? "-100px",
    threshold: 0,
  });

  const bouncing = {
    visible: {
      y: 25,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        yoyo: "Infinity",
      },
    },
  };
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          x: "-100%",
        },
        visible: {
          opacity: 0.75,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
      className={className}
    >
      <motion.div variants={bouncing}>{children}</motion.div>
    </motion.div>
  );
}

export default Svgwrapper;
