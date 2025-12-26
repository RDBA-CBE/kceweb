"use client";

import React from "react";
import SideMenu from "@/components/KCE/ABOUT/sideMenu";
import aboutData from "../../../JSON/ABOUT/PROFILE/page.json";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";

const AboutPage = () => {
  const { pageTitle, intro, imageSection, sideMenu } = aboutData;

 
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
            {/* TOP CONTENT */}
            <div className="about-top fade-up">
              <h1>{pageTitle}</h1>

              {intro.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* IMAGE GRID */}
            <div className="row about-image-section">
              <div className="col-md-6 fade-up delay-1">
                <div className="about-image-card">
                  <img src={imageSection.image} alt="Campus" />
                </div>
              </div>

              <div className="col-md-6 fade-up delay-2">
                <div className="about-text-card">
                  {imageSection.content.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu active="About Karpagam" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
