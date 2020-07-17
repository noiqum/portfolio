import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useViewportScroll,
  useMotionValue,
  transform,
} from "framer-motion";

import styles from "../css/journey.module.scss";

//components
import Section from "../components/section/section";
import Svgwrapper from "../components/svg/svg-wrapper";
import useWindowSize from "../hooks/useWindowSize";

// svg
import Baby from "../components/svg/baby.svg";
import Abc from "../components/svg/abc.svg";
import Student from "../components/svg/student.svg";
import University from "../components/svg/university.svg";
import Economics from "../components/svg/economics.svg";
import Theater from "../components/svg/theater.svg";
import Library from "../components/svg/library.svg";
import Bank from "../components/svg/bank.svg";
import Master from "../components/svg/master.svg";
import Manager from "../components/svg/manager.svg";

const containerVariants = {
  exit: {
    y: "100%",

    transition: {
      duration: 2,
      type: "tween",
    },
  },
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      duration: 2,
      type: "tween",
    },
  },
};

function Journey() {
  const { scrollYProgress } = useViewportScroll();
  let year = useMotionValue(1985);
  const [yearx, setYearx] = useState(1985);

  const window = useWindowSize();
  const linkHover = {
    color: "peru",
    letterSpacing: "3px",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
    textTransform: "uppercase",
  };

  useEffect(() => {
    const updateScroll = () => {
      const tt = transform(scrollYProgress.get(), [0, 0.9], [1985, 2020]);
      year.set(Math.floor(tt));
      let yy = year.get();
      setYearx(yy);
    };
    console.log(window.width);
    const unsubscribeY = scrollYProgress.onChange(updateScroll);
    return () => {
      unsubscribeY();
    };
  }, [window]);
  return (
    <motion.div
      variants={containerVariants}
      animate="animate"
      initial="initial"
      exit="exit"
      className={styles.journey}
    >
      <motion.nav>
        <ul>
          <Link href="/">
            <motion.li
              whileHover={window.width < 600 ? { color: "peru" } : linkHover}
            >
              Home
            </motion.li>
          </Link>
          <Link href="/portfolio">
            <motion.li
              whileHover={window.width < 600 ? { color: "peru" } : linkHover}
            >
              Portfolio
            </motion.li>
          </Link>
          <Link href="/contact">
            <motion.li
              whileHover={window.width < 600 ? { color: "peru" } : linkHover}
            >
              Contact
            </motion.li>
          </Link>
        </ul>
      </motion.nav>
      <motion.div className={styles.journey__bar}>
        <p>Year: {yearx}</p>
        <div className={styles.journey__progress}>
          <motion.div
            style={{
              scaleX: scrollYProgress,
            }}
            className={styles.journey__progress__item}
          ></motion.div>
        </div>
      </motion.div>
      <motion.div className={styles.journey__sections}>
        <Section className={styles.journey__sections__1}>
          <div className="svg_part">
            <Svgwrapper className="firstWrap">
              <Baby className={styles.baby} />
            </Svgwrapper>
            <Svgwrapper>
              <Abc className={styles.abc} />
            </Svgwrapper>
            <Svgwrapper margin="-50px">
              <Student />
            </Svgwrapper>
          </div>
          <div className={styles.parag}>
            In 1985, I was born in Manisa / Turkey , I got my basic education in
            there till my university section started.
          </div>
        </Section>
        <Section className={styles.journey__sections__2}>
          <Svgwrapper className={styles.university}>
            <University />
          </Svgwrapper>
          <Svgwrapper className={styles.economics}>
            <Economics />
          </Svgwrapper>
          <Svgwrapper className={styles.theater}>
            <Theater />
          </Svgwrapper>
          <Svgwrapper className={styles.library}>
            <Library />
          </Svgwrapper>
          <div className={styles.parag2}>
            In 2003, I started to study Economics at Dokuz Eylul University
            ,Izmir / Turkey. I was lucky enough to have a chance to meet theatre
            in that city.For six years being a part of a theatre club has
            thaught me a lot about team play.
            <br />
            At university period I have worked as volunteer in a charity where
            we were creating audiobooks for visually handicapped readers
          </div>
        </Section>
        <Section className={styles.journey__sections__3}>
          <Svgwrapper className={styles.bank}>
            <Bank />
          </Svgwrapper>
          <Svgwrapper className={styles.master}>
            <Master />
          </Svgwrapper>
          <Svgwrapper className={styles.manager}>
            <Manager />
          </Svgwrapper>
          <div className={styles.parag3}>
            In 2011 , I started to work as bank officer .Meanwhile ,I have done
            my master degree : advertising and brand management. After six years
            spending in finance , moved to Middle East (Baghdad -Iraq) and
            started a new position : operation manager. Almost two years working
            as operation manager , I stepped into a career shift ,jumped into
            Front-End Development world.Could not be happy more !
          </div>
        </Section>
      </motion.div>
    </motion.div>
  );
  {
    ssr: false;
  }
}

export default Journey;
