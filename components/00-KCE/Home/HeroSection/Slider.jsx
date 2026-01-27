import { useState } from "react";
import "./Slider.css";

export default function Slider({ children }) {
  const [index, setIndex] = useState(0);
  const width = 240;

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * width}px)` }}
      >
        {children}
      </div>

      <button onClick={() => setIndex(Math.max(index - 1, 0))}>‹</button>
      <button onClick={() =>
        setIndex(Math.min(index + 1, children.length - 1))
      }>›</button>
    </div>
  );
}
