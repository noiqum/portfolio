import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./welcome.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Night from "../svg/night.svg";
import Moon from "../svg/moon.svg";
import Day from "../svg/day.svg";
import Sun from "../svg/sun.svg";

const modeVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 3,
    },
  },
};

function Welcome({ darkMode }) {
  return (
    <div className={darkMode ? styles.welcome__dark : styles.welcome}>
      {darkMode ? (
        <motion.div
          variants={modeVariants}
          animate="animate"
          initial="initial"
          exit="exit"
          className={styles.welcome__svg}
        >
          <Night className={styles.welcome__svg__night} />
          <Moon className={styles.welcome__moon} />
        </motion.div>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={modeVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className={styles.welcome__svg}
          >
            <Day className={styles.welcome__svg__night} />
            <Sun className={styles.welcome__sun} />
          </motion.div>
        </AnimatePresence>
      )}
      hello ! this is onur , it is great to see you in here.Wanna know me better
      ? see my{" "}
      <Link href="/journey">
        <span>journey</span>
      </Link>
      ,if you are here to see my projects ,
      <Link href="/portfolio">
        <span>portfolio</span>
      </Link>{" "}
      section is waiting for you to present, or wanna say hi to me please do not
      hesitate to click{" "}
      <Link href="/contact">
        <span>contact</span>
      </Link>
    </div>
  );
}

export default Welcome;
