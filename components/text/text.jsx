import React from "react";
import { motion } from "framer-motion";

function Text({ content }) {
  const textAnimation = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
  };

  return <motion.div variants={textAnimation}>{content}</motion.div>;
}

export default Text;
