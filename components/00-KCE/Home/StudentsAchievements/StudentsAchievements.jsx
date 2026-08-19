"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StudentsAchievements.module.css";
import AchievementCard from "./AchievementCard";

const achievementsData = [
  {
    title: "Gold Medal Winner – Haryana Men’s Boxing Tournament",
    img: "/images/kce/home/student-achievements/Haryana-Boxing-Mens-ournament.webp",
  },
  {
    title: "HAIL 2026 - Hexaware AI Innovation League",
    img: "/images/kce/home/student-achievements/new/HAIL_2026_Hexaware_AI_Innovation_League..jpg",
  },
  {
    title:
      "Won the 2026 Best AI Awards and will represent us at the global finals in Taipei, Taiwan",
    img: "/images/kce/home/student-achievements/AI-Finalists.webp",
  },
  {
    title: "Area Level International Speech Contest!",
    img: "/images/kce/home/student-achievements/Speech-Contest.webp",
  },
  {
    title: "Agentic Among Us at IIT Delhi",
    img: "/images/kce/home/student-achievements/new/Agentic_Among_Us_at_IIT_Delhi.png",
  },
  {
    title:
      "TCC Committee Member for Rotaract District Organisation 3206",
    img: "/images/kce/home/student-achievements/new/TCC-Committee-Member-for-RI-District-3206.png",
  },
  {
    title:
      "The Confluence 2026 - Research, Innovation & Technology Summit",
    img: "/images/kce/home/student-achievements/new/The_Confluence_2026_-_Research_Innovation__Technology_Summit.jpg",
  },
  {
    title: "NPTEL Achievements",
    img: "/images/kce/home/student-achievements/new/NPTEL_Achivements01.jpg",
  },
];

const StudentsAchievements = () => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);

  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  /* =========================================
     RESPONSIVE CARDS
  ========================================= */

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth <= 600) {
        setPerView(1);
      } else if (window.innerWidth <= 1024) {
        setPerView(2);
      } else {
        setPerView(4);
      }
    };

    updatePerView();

    window.addEventListener("resize", updatePerView);

    return () => {
      window.removeEventListener("resize", updatePerView);
    };
  }, []);

  const maxIndex = Math.max(
    achievementsData.length - perView,
    0
  );

  /* =========================================
     FIX INDEX AFTER RESIZE
  ========================================= */

  useEffect(() => {
    setIndex((currentIndex) =>
      Math.min(currentIndex, maxIndex)
    );
  }, [maxIndex]);

  /* =========================================
     PREVIOUS
  ========================================= */

  const handlePrev = () => {
    setIndex((currentIndex) =>
      currentIndex <= 0
        ? maxIndex
        : currentIndex - 1
    );
  };

  /* =========================================
     NEXT
  ========================================= */

  const handleNext = () => {
    setIndex((currentIndex) =>
      currentIndex >= maxIndex
        ? 0
        : currentIndex + 1
    );
  };

  /* =========================================
     MOBILE TOUCH / SWIPE
  ========================================= */

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX;

    touchCurrentX.current =
      event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchCurrentX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance =
      touchStartX.current -
      touchCurrentX.current;

    const minimumSwipeDistance = 45;

    /* Swipe Left */
    if (distance > minimumSwipeDistance) {
      handleNext();
    }

    /* Swipe Right */
    if (distance < -minimumSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchCurrentX.current = 0;
  };

  return (
    <section className={styles.section}>
      {/* Heading */}

      <h2 className={styles.title}>
        STUDENTS ACHIEVEMENTS
      </h2>

      {/* =====================================
          ARROWS
      ===================================== */}

      {achievementsData.length > perView && (
        <div
          className={`${styles.arrows} student-achievements-arrows`}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous achievement"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next achievement"
          >
            ›
          </button>
        </div>
      )}

      {/* =====================================
          SLIDER
      ===================================== */}

      <div
        className={styles.sliderWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.cards}
          style={{
            "--per-view": perView,
            transform: `translate3d(-${
              index * (100 / perView)
            }%, 0, 0)`,
          }}
        >
          {achievementsData.map((item, i) => (
            <div
              className={styles.slide}
              key={`${item.title}-${i}`}
            >
              <AchievementCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsAchievements;