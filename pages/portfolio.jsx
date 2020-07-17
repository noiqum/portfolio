import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../css/portfolio.module.scss";
///svg///
import ReactSvg from "../components/svg/react.svg";
import ReduxSvg from "../components/svg/redux.svg";
import ReactRouterSvg from "../components/svg/reactrouter.svg";
import SassSvg from "../components/svg/sass.svg";
import FirebaseSvg from "../components/svg/firebase.svg";
import FramerSvg from "../components/svg/framer.svg";
import GreensockSvg from "../components/svg/greensock.svg";

/////////////////////////////////////////////////////
const headers = {
  initial: {
    y: 0,
  },
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};
const nav = {
  initial: {
    y: "-100vw",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};
const main = {
  animate: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 1,
      staggerDirection: 1,
    },
  },
};
const project = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.6,
      ease: [0.4, 0.01, -0.2, 0.8],
    },
  },
};
const item = {
  opacity: 1,
  zIndex: 1000,
  transition: {
    duration: 1.2,
    ease: "easeIn",
  },
};

function Portfolio() {
  return (
    <motion.div
      exit={{
        x: "100%",
        transition: {
          duration: 2,
        },
      }}
      className={styles.portfolio}
    >
      <motion.nav variants={nav} animate="animate" initial="initial">
        <Link href="/">
          <a style={{ fontSize: "30px" }}>home</a>
        </Link>
        <Link href="/contact">
          <a style={{ fontSize: "30px" }}>contact</a>
        </Link>
      </motion.nav>
      <motion.div
        variants={headers}
        animate="animate"
        initial="initial"
        className={styles.header}
      >
        <motion.span variants={letter} data-letter="p">
          p
        </motion.span>
        <motion.span variants={letter} data-letter="o">
          o
        </motion.span>
        <motion.span variants={letter} data-letter="r">
          r
        </motion.span>
        <motion.span variants={letter} data-letter="t">
          t
        </motion.span>
        <motion.span variants={letter} data-letter="f">
          f
        </motion.span>
        <motion.span variants={letter} data-letter="o">
          o
        </motion.span>
        <motion.span variants={letter} data-letter="l">
          l
        </motion.span>
        <motion.span variants={letter} data-letter="i">
          i
        </motion.span>
        <motion.span variants={letter} data-letter="o">
          o
        </motion.span>
      </motion.div>
      <motion.main
        className={styles.portfolio__projects}
        variants={main}
        animate="animate"
        initial="initial"
      >
        <motion.div
          variants={project}
          className={styles.portfolio__projects__item}
        >
          <motion.div
            whileHover={item}
            className={styles.portfolio__projects__item__capture_1}
          >
            <aside>
              <ReactSvg />
              <ReactRouterSvg />
              <ReduxSvg />
              <FirebaseSvg />
              <SassSvg />
              <GreensockSvg />
              <a href="https://github.com/noiqum/agora_new" target="blank">
                github
              </a>
              <a href="https://agora-event-platform.web.app/" target="blank">
                Live Demo
              </a>
            </aside>
          </motion.div>
          <span>Agora</span>
        </motion.div>
        <motion.div
          variants={project}
          className={styles.portfolio__projects__item}
        >
          <motion.div
            whileHover={item}
            className={styles.portfolio__projects__item__capture_2}
          >
            <aside>
              <ReactSvg />
              <ReactRouterSvg />
              <ReduxSvg />
              <SassSvg />
              <FirebaseSvg />
              <a href="https://github.com/noiqum/corner" target="blank">
                github
              </a>
              <a href="https://corner-e-commerce.web.app/" target="blank">
                Live Demo
              </a>
            </aside>
          </motion.div>
          <span>corner</span>
        </motion.div>
        <motion.div
          variants={project}
          className={styles.portfolio__projects__item}
        >
          <motion.div
            whileHover={item}
            className={styles.portfolio__projects__item__capture_3}
          >
            <aside>
              <a
                href="https://github.com/noiqum/coderAcademy_project"
                target="blank"
              >
                github
              </a>
              <a href="https://coder-academy-f9ed1.web.app/" target="blank">
                Live Demo
              </a>
            </aside>
          </motion.div>
          <span>coder academy</span>
        </motion.div>
        <motion.div
          variants={project}
          className={styles.portfolio__projects__item}
        >
          <motion.div
            whileHover={item}
            className={styles.portfolio__projects__item__capture_4}
          >
            <aside>
              {" "}
              <ReactSvg />
              <FirebaseSvg />
              <a
                href="https://github.com/noiqum/inventory_tracking_app_new"
                target="blank"
              >
                github
              </a>
              <a href="https://inventory-e9650.web.app/" target="blank">
                Live Demo
              </a>
            </aside>
          </motion.div>
          <span>Stock Tracker</span>
        </motion.div>
      </motion.main>
    </motion.div>
  );
}

export default Portfolio;
