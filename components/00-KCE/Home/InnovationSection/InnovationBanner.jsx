"use client";
import React, { useEffect, useState } from "react";
import "./InnovationBanner.css";
import Link from "next/link";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};

export default function InnovationBanner({ data }) {
  const stats = data?.stats || [];

  return (
    <section className="placement">
      <div className="placementOverlay">
        <div className="placementContainer">
          <div className="placementStats">
            {stats.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.divider && index !== 0 && (
                  <div className="divider" />
                )}
                <div className="stat">
                  <h3>
                    <CountUp end={item.count} />
                    {item.suffix}
                  </h3>
                  <span>{item.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
