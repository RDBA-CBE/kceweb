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
          "/images/kce/home/banner/b1.jpg",
         "/images/kce/home/banner/banner-img2.webp",
         "/images/kce/home/banner/banner-img3.webp",
          "/images/kce/home/banner/banner-img5.webp"
        ]}
      />

      {/* Bottom overlay */}
      <div className="hero-bottom">
        {/* LEFT – Stats */}
       <div className="stats-box">
  <StatCard value="1544+" label="Placements" />
  <StatCard value="232+" label="Companies" />
  <StatCard value="43" label="LPA - Max Salary" />
  {/* <StatCard value={(
      <div style={{ display: "flex", gap: "4px" }}>
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
        <img src="/images/kce/home/avatar.png" alt="" style={{ width: "42px", borderRadius: "50%" }} />
      </div>
    )} 
    label="Lorem ipsum" 
    isLast 
  /> */}
</div>

        {/* RIGHT – CTA */}
        <div className="cta-box">
          <ActionCard title="PLACEMENT" url={"/placement-overview"} />
          <ActionCard title="CAMPUS TOUR" url={"https://www.youtube.com/watch?v=uTIQvS38B4g&t=3s"} external />
          <ActionCard title="CAMPUS LIFE" url={"/infrastructure"}/>
          <ActionCard title="CENTERS OF EXCELLENCE" url={"/centers-of-excellence"}/>
        </div>
      </div>
    </section>
  );
}
