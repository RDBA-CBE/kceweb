"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from "./AlumniSlider.module.css";

const alumniData = [
  { name: "Mahendran Kamatchi", desc: "Cellular Firmware Engineer Apple", img: "/images/kce/home/alumini/3.png" },
  { name: "Mohammed Javid", desc: "Software Engineer Apple", img: "/images/kce/home/alumini/1.png" },
  { name: "Vignesh Sukumar", desc: "Senior Software Engineer Microsoft", img: "/images/kce/home/alumini/2.png" },
  { name: "Kaarthic Manickam", desc: "Engineering Manager Meta", img: "/images/kce/home/alumini/11.png" },
  { name: "Jawahar Ganeshs", desc: "Technical Advisor Microsoft", img: "/images/kce/home/alumini/10.png" },
  { name: "H Mohamed Sunfeer", desc: "Senior Security Software Engineer Nvidia", img: "/images/kce/home/alumini/9.png" },
  { name: "R Suganthraj", desc: "Software Development Engineer Amazon", img: "/images/kce/home/alumini/8.png" },
  { name: "Sarumathi S", desc: "Software Development Engineer Amazon", img: "/images/kce/home/alumini/7.png" },
  { name: "Sivakumar A", desc: "Principal Member Oracle", img: "/images/kce/home/alumini/6.png" },
  { name: "J Vijay Shankar", desc: "Software Development Engineer Amazon", img: "/images/kce/home/alumini/5.png" },
  { name: "Vamsikrishnan M", desc: "Software Development Engineer Amazon", img: "/images/kce/home/alumini/4.png" }
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
          768: { slidesPerView: 2, spaceBetween: 24},
          850: { slidesPerView: 3, spaceBetween: 24},
          1300: { slidesPerView: 4, spaceBetween: 30 },
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
              <h5>{item.name}</h5>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AlumniSlider;
