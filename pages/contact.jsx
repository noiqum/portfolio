import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../css/contact.module.scss";
///svg///
import Twitter from "../components/svg/twitter.svg";
import Linkedin from "../components/svg/linkedin.svg";
import Github from "../components/svg/github.svg";
///components
import ContactMobile from "../components/mobile/contact/contact-mobile";
import useWindowSize from "../hooks/useWindowSize";

function Contact() {
  const [email, setEmail] = useState("onurcoskun99@gmail.com");
  // const block = {
  //   animate: {
  //     y: ["0%", "100%", "50%"],
  //     zIndex: [500, 600, 600],
  //     transition: {
  //       delay: 5,
  //       duration: 1.3,
  //       ease: "easeInOut",
  //       times: [0, 0.2, 1],
  //     },
  //     borderRadius: "25%",
  //   },
  // };
  // const block2 = {
  //   animate: {
  //     y: ["0%", "100%", "60%"],
  //     zIndex: [600, 500, 500],
  //     transition: {
  //       delay: 3.5,
  //       duration: 1.3,
  //       ease: "easeInOut",
  //       times: [0, 0.2, 1],
  //     },
  //     borderRadius: "25%",
  //   },
  // };
  // const block3 = {
  //   animate: {
  //     y: ["0%", "100%", "70%"],
  //     zIndex: [700, 800, 800],
  //     transition: {
  //       delay: 2,
  //       duration: 1.3,
  //       ease: "easeInOut",
  //       times: [0, 0.2, 1],
  //     },
  //     borderRadius: "25%",
  //   },
  // };

  const links = {
    initial: {
      x: "300%",
    },
    animate: {
      x: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 180,
        damping: 300,
      },
    },
  };

  return (
    <>
      <motion.div
        exit={{ y: "100%", duration: 2, transition: [0.6, 0.05, -0.2, 0.9] }}
        animate={{
          x: 0,
          transition: {
            duration: 2,
            staggerChildren: "beforeChildren",
          },
        }}
        initial={{ x: "100%" }}
        className={styles.contact}
      >
        <Link href="/">
          <a className={styles.contact_home}>home</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.contact_portfolio}>Portfolio</a>
        </Link>
        <h1>say hi to me!</h1>
        <motion.div
          className={styles.contact_links}
          variants={links}
          animate="animate"
          initial="initial"
        >
          <ul>
            <li>
              <input type="text" value={email} id="email-text"></input>
              <span
                onClick={() => {
                  document.getElementById("email-text").select();
                  document.execCommand("Copy");
                }}
              >
                Copy
              </span>
            </li>
            <li>
              <a href="https://twitter.com/oneur" target="blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/oneur" target="blank">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/noiqum" target="blank">
                <Github />
              </a>
            </li>
          </ul>
        </motion.div>
        {/* <motion.div
          variants={block}
          animate="animate"
          initial="initial"
          className={styles.block}
        ></motion.div>
        <motion.div
          variants={block2}
          animate="animate"
          initial="initial"
          className={styles.block2}
        ></motion.div>
        <motion.div
          variants={block3}
          animate="animate"
          initial="initial"
          className={styles.block3}
        ></motion.div> */}
      </motion.div>
    </>
  );
}

export default Contact;
