"use client";

import { useEffect, useState } from "react";
import "./BackgroundSlider.css";

export default function BackgroundSlider({
  images = [],
  interval = 5000,
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="background-slider">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`background-slide ${
            index === current ? "active" : ""
          }`}
        >
          {/* Blurred background prevents empty space */}
          <div
            className="background-slide-blur"
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />

          {/* Actual banner - NEVER CROPPED */}
          <img
            src={image}
            alt=""
            className="background-slide-image"
            loading={index === 0 ? "eager" : "lazy"}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}