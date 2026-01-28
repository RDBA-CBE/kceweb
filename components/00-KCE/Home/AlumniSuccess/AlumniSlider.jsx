"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from "./AlumniSlider.module.css";

const alumniData = [
  { name: "P.Senthil Kumar", desc: "Junior Engineer – CPWD", img: "/images/kce/home/alumini/1.webp" },
  { name: "Arun", desc: "EEE -2013", img: "/images/kce/home/alumini/2.webp" },
  { name: "Mr.Gowtham M", desc: "DCS System Engineer Yokogawa India Ltd.,", img: "/images/kce/home/alumini/3.webp" },
 { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/4.webp" },
 { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/5.webp" },
   { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/1.webp" },
  { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/2.webp" },
  { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/3.webp" },
 { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/4.webp" },
 { name: "Mrs. Lorem ipsum", desc: "Lorem ipsum dolor sit amet", img: "/images/kce/home/alumini/5.webp" }
];

const AlumniSlider = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>ALUMNI SUCCESS STORIES</h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides
        loop
        speed={1200}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={5}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 16},
          768: { slidesPerView: 3, spaceBetween: 24},
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 60,
          depth: 220,
          modifier: 1.2,
          slideShadows: false,
        }}
        className={styles.swiper}
      >
        {alumniData.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AlumniSlider;
