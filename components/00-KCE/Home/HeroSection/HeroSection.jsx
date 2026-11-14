"use client";

import BackgroundSlider from "./BackgroundSlider";
import StatCard from "./StatCard";
import ActionCard from "./ActionCard";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <a
        href="https://forms.gle/ZT2Q6BSUt6dTn6LK9"
        target="_blank"
        rel="noopener noreferrer"
        className="alumni-strip"
      >
        <span className="alumni-strip-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 3 1 8l11 5 9-4.09V14h2V8L12 3zm0 7.18L5.82 8 12 5.18 18.18 8 12 10.18zM5 11.2v3.3c0 .4.2.77.54.98C7.21 16.52 9.57 17.2 12 17.2s4.79-.68 6.46-1.72c.34-.21.54-.58.54-.98v-3.3l-7 3.18-7-3.18z" />
          </svg>
        </span>
        <span className="alumni-strip-text">ALUMNI REGISTRATION</span>
        <span className="alumni-strip-arrow" aria-hidden="true">&rarr;</span>
      </a>
      {/* Background image slider */}
      <BackgroundSlider
        images={[
          { src: "/images/kce/home/banner/banner-n1.webp", link: "https://learn.kce.ac.in/sangamam-2026-grand-alumni-meet-at-karpagam-college-of-engineering/" },
          //  { src: "/images/kce/home/banner/banner-21.webp", link: "https://learn.kce.ac.in/seminar-on-semiconductor-technology-for-5g-and-6g-communications/" },
          //  { src: "/images/kce/home/banner/banner-20.webp", link: "https://learn.kce.ac.in/freshers-day-2026-live-in-concert/" },
          //  { src: "/images/kce/home/banner/banner-19.webp", link: "https://learn.kce.ac.in/pg-induction-programme-mba-2026/" },
          //  { src: "/images/kce/home/banner/banner-18.webp", link: "https://learn.kce.ac.in/novah-2026-pg-induction-programme-for-mca-2026-2028/" },
          //  { src: "/images/kce/home/banner/banner-15.webp", link: "https://learn.kce.ac.in/pg-induction-programme-2026-aloha-x-novah-kce/" },
          //  { src: "/images/kce/home/banner/banner-17.webp", link: "https://learn.kce.ac.in/hackverse-2-0-external-hackathon-by-department-of-cse-kce/" }, 
          //  { src: "/images/kce/home/banner/banner-16.webp", link: "https://learn.kce.ac.in/the-big-bang-theory-5th-installation-ceremony-of-rotaract-club-of-kce/" },            
          //  { src: "/images/kce/home/banner/banner-14.webp", link: "https://learn.kce.ac.in/aloha-2026-novah-2026-inauguration-of-pg-programme-2026/" }, 
          //  { src: "/images/kce/home/banner/banner-13.webp", link: "https://learn.kce.ac.in/aloha-novah-2026/" }, 
          //  { src: "/images/kce/home/banner/banner-12.webp", link: "https://learn.kce.ac.in/one-week-atal-offline-fdp-on-ai-driven-quantum-computing/" },   
          //  { src: "/images/kce/home/banner/banner-11.webp", link: "https://learn.kce.ac.in/inaugural-of-cyber-security-clubs-awareness-programme-on-women-cyber-safety/" },   
          "/images/kce/home/banner/kce-b1.png",          
          "/images/kce/home/banner/kce-b2.png",
          // "/images/kce/home/banner/b1.jpg",
          // "/images/kce/home/banner/banner-img2.webp",
          // "/images/kce/home/banner/banner-img3.webp",
          // "/images/kce/home/banner/banner-img5.webp",
          // "/images/kce/home/banner/banner.png",
          // "/images/kce/home/banner/banner-1.png",
          
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
  <div className="alumni-blink">
    <ActionCard
      title="ALUMNI REGISTRATION"
      url="https://forms.gle/ZT2Q6BSUt6dTn6LK9"
      external
    />
  </div>

  <div className="alumni-blink">
    <ActionCard
      title="ALUMNI AWARDS"
      url="https://forms.gle/XkarubU2btPbvumHA"
      external
    />
  </div>

  {/* <ActionCard
    title="CAMPUS TOUR"
    url="https://www.youtube.com/watch?v=uTIQvS38B4g&t=3s"
    external
  /> */}
  <ActionCard
    title="PLACEMENT"
    url="/placement"
      />
  <ActionCard
    title="CENTER OF EXCELLENCE"
    url="/center-of-excellence"
  />
</div>

      </div>
    </section>
  );
}
