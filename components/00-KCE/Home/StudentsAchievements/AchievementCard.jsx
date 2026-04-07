import React from "react";
import styles from "./AchievementCard.module.css";
import Link from "next/link";
import RichText from "../../DepartmentCompoennts/RichText";

const AchievementCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.img} alt={data.title} />

      <div className={styles.overlay}>
        <h5>{data.title}</h5>
        <RichText as="p" content={data.desc} />
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
