import Link from "next/link";
import styles from "../css/index.module.scss";
import { motion } from "framer-motion";
////components//////////////
import Head from "next/head";
import Welcome from "../components/welcome/welcome";
import ModeButton from "../components/header/mobile/m-header";
///hooks/////
import { useState, useEffect } from "react";

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = window.localStorage.getItem("mode");

    if (mode) {
      setDarkMode(JSON.parse(mode));
    }
    console.log(typeof darkMode);
    console.log(darkMode);
    console.log(mode);
  }, []);

  const changeMode = () => {
    const md = !darkMode;
    window.localStorage.setItem("mode", JSON.stringify(md));
    setDarkMode(!darkMode);
  };

  const hover = {
    scale: 1.05,
    cursor: "pointer",
    color: "#0466c8",
    transition: {
      duration: 0.5,
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.2,
      },
    },
    exit: {
      y: 60,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      id="ctn"
      exit={{
        opacity: 0,
        y: 100,
        transition: {
          duration: 2,
          ease: [0.6, 0.04, -0.2, 0.01],
        },
      }}
      className={darkMode ? styles.container__dark : styles.container}
    >
      <Head>
        <title>Onur Coskun</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="images/favicon.svg" type="svg" />
      </Head>
      <ModeButton modeChange={changeMode} />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 360,
            damping: 20,
          },
        }}
        id="welcome"
        className={styles.welcome}
      >
        Hello ,This is Onur !
      </motion.div>
      <Welcome darkMode={darkMode} />
      <motion.div
        className={
          darkMode ? styles.container__links__dark : styles.container__links
        }
        variants={stagger}
        animate="animate"
        initial="initial"
      >
        <Link href="/journey">
          <motion.a variants={fadeInUp} whileHover={hover}>
            journey
          </motion.a>
        </Link>
        <Link href="/portfolio">
          <motion.a variants={fadeInUp} whileHover={hover}>
            portfolio
          </motion.a>
        </Link>
        <Link href="/contact">
          <motion.a variants={fadeInUp} whileHover={hover}>
            contact
          </motion.a>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
