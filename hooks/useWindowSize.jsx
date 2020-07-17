import React, { useState, useEffect } from "react";

function useWindowSize() {
  const getSize = () => {
    if (typeof window !== undefined) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      return { width: 1500, height: 1200 };
    }
  };
  const [windowSize, setWindowsize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowsize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, [window]);

  return windowSize;
}

export default useWindowSize;
