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
      {images.map((item, index) => {
        const src = typeof item === "string" ? item : item.src;
        const link = typeof item === "object" ? item.link : null;
        const slideContent = (
          <>
            <div
              className="background-slide-blur"
              style={{ backgroundImage: `url("${src}")` }}
            />
            <img
              src={src}
              alt=""
              className="background-slide-image"
              loading={index === 0 ? "eager" : "lazy"}
              draggable="false"
            />
          </>
        );
        return (
          <div
            key={`${src}-${index}`}
            className={`background-slide ${index === current ? "active" : ""}`}
          >
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "contents" }}>
                {slideContent}
              </a>
            ) : slideContent}
          </div>
        );
      })}
    </div>
  );
}