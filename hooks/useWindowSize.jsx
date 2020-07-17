import React, { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowsize] = useState(getSize);
  useEffect(() => {
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };
  }, []);

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
