"use client";

import SideMenu from "@/components/KCE/ABOUT/sideMenu";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import React from "react";

const VisionMissionPage = () => {
  return (
    <section className=" about-wrapper">
       <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      <div className="container-fluid">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-9 about-content-area">

            {/* VISION */}
            <div className="vm-card fade-up">
              <span className="vm-badge">Vision</span>
              <h2 className="vm-title">Our Vision</h2>
              <p className="vm-text">
                To become one of the best institutions at the National and
                International level by incorporating innovative teaching-learning
                methods to enable the students to secure a high-value career,
                motivate to pursue higher education and research to serve the society.
              </p>
            </div>

            {/* MISSION */}
            <div className="vm-card fade-up delay-1">
              <span className="vm-badge mission">Mission</span>
              <h2 className="vm-title">Our Mission</h2>

              <ul className="vm-list">
                <li>
                  To bring out knowledgeable engineers and professionals by having
                  qualified faculty members and necessary infrastructure.
                </li>
                <li>
                  To work in close association with stakeholders through enhanced
                  industry–institute interaction and need-based research.
                </li>
                <li>
                  To organize co-curricular and extracurricular activities for
                  character and personality development to serve and lead society.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu active="Vision & Mission" />

        </div>
      </div>
    </section>
  );
};

export default VisionMissionPage;
