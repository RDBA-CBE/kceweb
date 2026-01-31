import React from 'react';
import styles from './About.module.css';

const About = ({ data = {} }) => {
  // Destructure with fallbacks to avoid "undefined" errors
  const { 
    topText = "KCE was established with the vision of providing cutting edge technical education and to create proficient engineers. The college is accredited by NAAC with ‘A+’ Grade, TCS, Wipro and NBA . KCE strives to impart quality education and an excellent career start to all its students.", 
    bottomText = "", 
    imageSrc = "/images/kce/home/about-us1.webp", 
    logos = [
        { src: "/images/kce/home/logo/naac.webp", alt: "NAAC" },
        { src: "/images/kce/home/logo/nba.webp", alt: "NBA" },
        { src: "/images/kce/home/logo/aicte.webp", alt: "AICTE" },
        { src: "/images/kce/home/logo/anna-university.webp", alt: "Anna University" },
        { src: "/images/kce/home/logo/iso2015.webp", alt: "ISO 9001-2015" },
        { src: "/images/kce/home/logo/iso14001.webp", alt: "ISO 14001-2015" },
    ] 
  } = data;

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Text Side */}
        <div className={styles.contentBox}>
          <h2 className={styles.title}>ABOUT US</h2>
          <div className={styles.description}>
            <p>{topText}</p>
            <p>{bottomText}</p>
          </div>

          <div className={styles.logoGrid}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoWrapper}>
                <img src={logo.src} alt={logo.alt || 'accreditation'} />
              </div>
            ))}
          </div>

          <a href="/KCE/profile">
            <button className={styles.ctaButton}>Read More</button>
          </a>
        </div>

        {/* Image Side */}
        <div className={styles.visualBox}>
          <div className={styles.imageClip}>
            <img src={imageSrc} alt="Campus" className={styles.mainImg} />
          </div>
          {/* The decorative "dots" pattern seen in the image */}
          <div className={styles.patternOverlay}></div>
        </div>

      </div>
    </section>
  );
};

export default About;