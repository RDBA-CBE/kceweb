import React from 'react';
import styles from './About.module.css';
import Link from 'next/link';
import RichText from '../../DepartmentCompoennts/RichText';

const About = ({ data = {} }) => {
  // Destructure with fallbacks to avoid "undefined" errors
  const { 
    topText = "Karpagam College of Engineering established in the year 2000 by Dr.R.Vasanthakumar an enterprising industrialist and renowned philanthropist with the vision of providing cutting edge technical education and to create proficient engineers. It is an Autonomous Institution, affiliated to Anna University, Chennai. The institution  is ISO:9001:2015 certified, NBA Accreditation (CIVIL, CSE, ECE, EEE, IT and MECH) and  accredited by NAAC with ‘A+’ Grade. The Institution is ranked in the 201-300 band among Engineering colleges in India by the MHRD-National Institutional Ranking Framework 2025. The Institution offers 9 UG Programmes and 2 PG Programmes with Industry-drafted Choice Based Credit System (CBCS) curriculum and syllabi. The Institution is bestowed with world-class facilities, including state-of-the-art laboratories, smart classrooms, and amazing infrastructure, making it the apt place for young engineers to realize their dreams.", 
    bottomText = "", 
    imageSrc = "/images/kce/home/about-us1.webp", 
    logos = [
        { src: "/images/kce/home/logo/naac+.webp", alt: "NAAC+" },
        { src: "/images/kce/home/logo/nba.webp", alt: "NBA" },
        { src: "/images/kce/home/logo/aicte.webp", alt: "AICTE" },
        { src: "/images/kce/home/logo/anna-university.webp", alt: "Anna University" },
        { src: "/images/kce/home/logo/iso2015.webp", alt: "ISO 9001-2015" },
        { src: "/images/kce/home/logo/iso14001.webp", alt: "ISO 14001-2015" },
        { src: "/images/kce/home/logo/nirf.webp", alt: "NIRF" },
        { src: "/images/kce/home/logo/center-of-research.webp", alt: "Center of Research" }, 
        { src: "/images/kce/home/logo/mhrds.webp", alt: "MHRD'S Innovation Cell" },   
        { src: "/images/kce/home/logo/UGC.webp", alt: "MHRD'S Innovation Cell" }, 
    ] 
  } = data;

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Text Side */}
        <div className={styles.contentBox}>
          <h2 className={styles.title}>ABOUT US</h2>
          <div className={styles.description}>
            <RichText as="p" content={topText} />
            <RichText as="p" content={bottomText} />
          </div>

          <div className={styles.logoGrid}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoWrapper}>
                <img src={logo.src} alt={logo.alt || 'accreditation'} />
              </div>
            ))}
          </div>

           <Link
                href="/profile"
                className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
                target="_self"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Read More</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </Link>

         
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