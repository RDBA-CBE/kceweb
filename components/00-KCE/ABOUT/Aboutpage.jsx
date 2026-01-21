"use client";

import React from "react";
import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";
import data from "@/JSON/ABOUT/profile.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";

const Aboutpage = () => {
  const { pageTitle, intro, imageSection, sideMenu } = data;

 
  return (
    <section className=" about-wrapper">
      <InnerBanner
        data={data?.banner}
      />
      <div className="section-wid section-bg1 my-5">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 about-content-area">
            {/* TOP CONTENT */}
            <div className="about-top fade-up">
              <h2 className="section-ti">{pageTitle}</h2>

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

export default Aboutpage;
