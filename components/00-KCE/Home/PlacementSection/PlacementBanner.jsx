"use client";
import { useEffect, useState } from "react";
import "./PlacementBanner.css";
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

export default function PlacementBanner() {
  return (
    <section className="placement">
      <div className="placementOverlay">
        {/* 🔑 container added */}
        <div className="container placementContent">
          {/* LEFT */}
          <div className="placementLeft">
            <h2>Placement & Training</h2>
            <p>
              The placement cell takes immense effort in guiding the students
              for their successful career. The college has active MoUs & Centers
              of Excellence with various industries. The college is visited by
              multinational companies year after year and has a strong placement
              record.
            </p>
            <Link
              href="/placement-overview"
              className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
              target="_blank"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">know More</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="placementStats">
            <div className="stat">
              <h3>
                <CountUp end={1544} />+
              </h3>
              <span>Placements</span>
            </div>

            <div className="divider" />

            <div className="stat">
              <h3>
                <CountUp end={232} />+
              </h3>
              <span>Companies</span>
            </div>

            <div className="divider" />

            <div className="stat">
              <h3>
                <CountUp end={43} />
              </h3>
              <span>LPA - Max Salary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
