import React from "react";

function Play({ ref, height, width }) {
  return <canvas ref={ref} height={height} width={width}></canvas>;
}

export default Play;
