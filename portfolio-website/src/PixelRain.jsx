import React, { useEffect, useRef } from "react";

const NUM_PIXELS = 120;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function PixelRain() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < NUM_PIXELS; i++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.style.left = `${getRandomInt(window.innerWidth)}px`;
      pixel.style.animationDuration = `${1.5 + Math.random() * 2.5}s`;
      pixel.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(pixel);
    }
  }, []);

  return <div className="pixel-rain" ref={containerRef}></div>;
}