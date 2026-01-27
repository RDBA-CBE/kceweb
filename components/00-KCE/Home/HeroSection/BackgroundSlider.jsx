"use client";

import { useState, useEffect } from "react";
import "./BackgroundSlider.css";

export default function BackgroundSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`bg-slide ${i === index ? "active" : ""}`}
          alt=""
        />
      ))}
    </div>
  );
}
