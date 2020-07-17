import gsap from "gsap";

export const ani = (elm) => {
  gsap.to(elm, {
    duration: 1.5,
    y: 60,
    ease: "power3.out",
  });
};

export const delay = (n) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

export const fadeOut = (elm, time) => {
  gsap.to(elm, {
    opacity: 0,
    duration: time,
    ease: "power3.out",
  });
};

export const fadeIn = (elm, time) => {
  gsap.from(elm, {
    duration: time,
    opacity: 0,
    ease: "power3.out",
  });
};

export const hover = {
  scale: 1.05,
  cursor: "pointer",
};

export const tap = {
  scale: 0,
  opacity: 0,
  transition: {
    duration: 1.5,
  },
};

export const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 5,
      ease: "inout",
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
