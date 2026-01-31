"use client";

import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import React from "react";
import sideBarData from "@/JSON/sidebar.json";
import data from "@/JSON/ABOUT/vissionMision.json"; 

const VisionMissionPage = () => {
  const { banner, content, sideMenu } = data;

  return (
    <section className="about-wrapper">
      <InnerBanner data={banner} />

      <div className="section-wid section-bg1 my-5">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 about-content-area">
            {/* VISION */}
            <div className="vm-card fade-up">
              <span className="ti-badge">{content.vision.badge}</span>
              <h2 className="section-ti">{content.vision.title}</h2>
              <p className="vm-text">{content.vision.text}</p>
            </div>

            {/* MISSION */}
            <div className="vm-card fade-up delay-1">
              <span className="ti-badge">{content.mission.badge}</span>
              <h2 className="section-ti">{content.mission.title}</h2>

              <ul className="vm-list">
                {content.mission.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu  data={sideBarData?.profile} />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPage;
