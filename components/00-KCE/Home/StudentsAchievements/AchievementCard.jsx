import React from "react";
import styles from "./AchievementCard.module.css";
import Link from "next/link";

const AchievementCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.img} alt={data.title} />

      <div className={styles.overlay}>
        <h5>{data.title}</h5>
        <p>{data.desc}</p>
        <Link
          href="/acheivements"
          className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
          target="_self"
        >
          <span className="icon-reverse-wrapper">
            <span className="btn-text">Know More</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        </Link>
      
      </div>
    </div>
  );
};

export default AchievementCard;
