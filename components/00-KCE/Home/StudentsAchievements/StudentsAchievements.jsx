import React from "react";
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
];

const StudentsAchievements = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Students Achievements</h2>

        <div className={styles.arrows}>
          <button>‹</button>
          <button>›</button>
        </div>
      </div>

      <div className={styles.cards}>
        {achievementsData.map((item, index) => (
          <AchievementCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default StudentsAchievements;
