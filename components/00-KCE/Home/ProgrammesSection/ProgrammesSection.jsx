"use client";
import { useState } from "react";
import styles from "./ProgrammesSection.module.css";

const data = [
  {
    title: "UG Programmes",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    items: [
      "B.E. Civil Engineering",
      "B.E. Computer Science and Engineering",
      "B.E. Computer Science and Engineering (CyberSecurity)",
      "B.E. Computer Science and Technology",
      "B.E. Electronics and Communication Engineering +",
      "B.E. Electrical and Electronics Engineering +",
      "B.E. Electronics and Telecommunications Engineering",
      "B.E. Mechanical Engineering +",
      "B.E. Computer Science and Design",
      "B.Tech. Information Technology +",
      "B.Tech. Artificial Intelligence and Data Sciences",
    ],
  },
  {
    title: "PG Programmes",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    items: [
      "B.E. Mechanical Engineering +",
      "B.E. Computer Science and Design",
      "B.Tech. Information Technology +",
      "B.Tech. Artificial Intelligence and Data Sciences",
    ],
  },
  {
    title: "Doctorate",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    items: [
   "Ph.D. Civil Engineering",
    "Ph.D. Electrical & Electronics Engineering",
    "Ph.D. Electronics and Communication Engineering",
    "Ph.D. Electronics Engineering (VLSI Design and Technology)",
    "Ph.D. Information Technology",
    "Ph.D. Computer Science and Engineering",
    "Ph.D. Artificial Intelligence and Data Science",
    "Ph.D. English",
    "Ph.D. Mathematics",
    "Ph.D. Physics",
    "Ph.D. Chemistry",
    "Ph.D. MBA",
    "Ph.D. MCA"

    ],
  },
];

export default function ProgrammesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h2 className={styles.heading}>PROGRAMMES FOR YOU</h2>

        <div className={styles.layout}>
          {/* ORANGE CARD WITH SVG MASK */}
          <div className={styles.orangeCard}>
{/* <svg
  className={styles.orangeMask}
  viewBox="0 0 360 520"
  preserveAspectRatio="none"
>
  <path
    d="
      M0 0
      H360
      V400
      C360 520 20 520 0 520
      Z
    "
    fill="#F5821F"
  />
</svg> */}



          <div className={styles.orangeContent}>
  {data.map((item, i) => (
    <div
      key={i}
      className={styles.tab}
      onClick={() => setActive(i)}
    >
      <h3>› {item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ))}
</div>

            {/* LOGO */}
            {/* <div className={styles.kLogoWrap}>
              <img
                src="/images/kce/logo/k-logo-white.png"
                alt="K Logo"
                className={styles.kLogo}
              />
            </div> */}
          </div>

          {/* RIGHT LIST */}
          <div className={styles.list}>
            {data[active].items.map((item, i) => (
              <div key={i} className={styles.listItem}>
                <span>›</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION BOTTOM SVG WAVE */}
<svg
  className={styles.bottomWave}
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,0
      C480,140 960,140 1440,0
      L1440,120
      L0,120
      Z
    "
    fill="#ffffff"
  />
</svg>
    </section>
  );
}
