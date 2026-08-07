"use client";

import React, { useEffect, useState } from "react";
import styles from "./StudentsAchievements.module.css";
import AchievementCard from "./AchievementCard";

const achievementsData = [
    {
    title: "Gold Medal Winner – Haryana Men’s Boxing Tournament",
    img: "/images/kce/home/student-achievements/Haryana-Boxing-Mens-ournament.webp",
  },
    {
    title: "Our Students Win 1st Place at HACKZILLA 2025",
    img: "/images/kce/home/student-achievements/hackzila2025.webp",
  },
    {
    title: "Won the 2026 Best AI Awards and will represent us at the global finals in Taipei, Taiwan",
    img: "/images/kce/home/student-achievements/AI-Finalists.webp",
  },

  {
    title: "Area Level International Speech Contest!",
    img: "/images/kce/home/student-achievements/Speech-Contest.webp",
  },
  {
    title: "Gatestack Crew",
    img: "/images/kce/home/student-achievements/achievements-7.webp",
  },
  {
    title: "TANCAM's Hackathon For Women In Science & Engineering (TN wise)",
    img: "/images/kce/home/student-achievements/achievements-3.webp",
  },
  {
    title: "Build The Future Bimcontest 2025",
    img: "/images/kce/home/student-achievements/achievements-6.webp",
  },
  // {
  //   title: "Yuvai Global Youth Challenge",
  //   img: "/images/kce/home/student-achievements/achievements-4.webp",
  // },
  // {
  //   title: "De Montfort University-Dubai",
  //   img: "/images/kce/home/student-achievements/achievements-2.webp",
  // }
];

const StudentsAchievements = () => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 600) setPerView(1);
      else if (window.innerWidth <= 1024) setPerView(2);
      else setPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(achievementsData.length - perView, 0);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>STUDENTS ACHIEVEMENTS</h2>

      {/* arrows live in grey area */}
      {/* <div className={`${styles.arrows} student-achievements-arrows`}>
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
        >
          ‹
        </button>
        <button
          onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
          disabled={index === maxIndex}
        >
          ›
        </button>
      </div> */}

      <div className={styles.sliderWrapper}>
        <div
          className={styles.cards}
          style={{
            transform: `translateX(-${index * (100 / perView)}%)`,
          }}
        >
          {achievementsData.map((item, i) => (
            <AchievementCard key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsAchievements;
