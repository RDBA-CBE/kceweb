"use client";

import React, { useEffect, useState } from "react";
import styles from "./StudentsAchievements.module.css";
import AchievementCard from "./AchievementCard";

const achievementsData = [
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetuer",
    img: "/images/kce/home/student-achievements/1.webp",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetuer",
    img: "/images/kce/home/student-achievements/2.webp",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetuer",
    img: "/images/kce/home/student-achievements/3.webp",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetuer",
    img: "/images/kce/home/student-achievements/4.webp",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetuer",
    img: "/images/kce/home/student-achievements/5.webp",
  },
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
      <h2 className={styles.title}>Students Achievements</h2>

      {/* arrows live in grey area */}
      <div className={styles.arrows}>
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
      </div>

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
