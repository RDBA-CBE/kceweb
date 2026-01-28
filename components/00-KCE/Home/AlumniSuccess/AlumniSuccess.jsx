import React from "react";
import styles from "./AlumniSuccess.module.css";

const alumniData = [
  {
    name: "Mrs. Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet,",
    img: "/images/kce/home/alumini/1.webp",
  },
  {
    name: "Mrs. Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet,",
    img: "/images/kce/home/alumini/2.webp",
  },
  {
    name: "Mr. Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet",
   img: "/images/kce/home/alumini/3.webp",
    featured: true,
  },
  {
    name: "Mrs. Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet,",
    img: "/images/kce/home/alumini/4.webp",
  },
  {
    name: "Mrs. Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet,",
    img: "/images/kce/home/alumini/5.webp",
  },
];

const AlumniSuccess = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Alumni Success Stories</h2>

      <div className={styles.curveWrap}>
        {alumniData.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              item.featured ? styles.featured : ""
            }`}
          >
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlumniSuccess;
