"use client";

import BackgroundSlider from "./BackgroundSlider";
import StatCard from "./StatCard";
import ActionCard from "./ActionCard";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background image slider */}
      <BackgroundSlider
        images={[
          "/images/kce/home/banner/banner-img1.webp",
         "/images/kce/home/banner/banner-img2.webp",
         "/images/kce/home/banner/banner-img3.webp",
        ]}
      />

      {/* Bottom overlay */}
      <div className="hero-bottom">
        {/* LEFT – Stats */}
       <div className="stats-box">
  <StatCard value="12.0k+" label="Section One" />
  <StatCard value="34.0k+" label="Section Two" />
  <StatCard value={(
      <div style={{ display: "flex", gap: "4px" }}>
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
      </div>
    )} 
    label="Lorem ipsum" 
    isLast 
  />
</div>

        {/* RIGHT – CTA */}
        <div className="cta-box">
          <ActionCard title="PLACEMENT" />
          <ActionCard title="CAMPUS LIFE" />
          <ActionCard title="CENTERS OF EXCELLENCE" />
        </div>
      </div>
    </section>
  );
}
