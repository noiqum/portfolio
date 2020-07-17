import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./section.module.scss";
import { useInView } from "react-intersection-observer";

function Section({ children, margin }) {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    rootMargin: margin ?? "-100px",
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.section
      animate={animation}
      initial="hidden"
      ref={contentRef}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            ease: [0.6, 0.05, -0.01, 0.9],
            when: "beforeChildren",
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
        },
      }}
      className={styles.section}
    >
      {children}
    </motion.section>
  );
}

export default Section;
