import React from "react";
import styles from "./AchievementCard.module.css";

const AchievementCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.img} alt={data.title} />

      <div className={styles.overlay}>
        <h4>{data.title}</h4>
        <p>{data.desc}</p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default AchievementCard;
