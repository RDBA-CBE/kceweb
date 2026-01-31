"use client";

import React from "react";
import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";
import data from "@/JSON/ABOUT/profile.json";
import sideBarData from "@/JSON/sidebar.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import SplitImageContent from "../DepartmentCompoennts/SplitImageContent";

const Aboutpage = () => {
  const { pageTitle, intro, imageSection, sideMenu, Highlights, course } = data;

  console.log("sideBarData", sideBarData);

  return (
    <section className=" about-wrapper ">
      <InnerBanner data={data?.banner} />
      <div className="section-wid section-bg1">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 about-content-area sidebar-com">
            {/* TOP CONTENT */}
            <div className="about-top fade-up">
              <h2 className="section-ti">{pageTitle}</h2>

              {intro.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* IMAGE GRID */}
            <div className="row about-image-section ">
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

            <SplitImageContent data={Highlights} />

            <section className="abt ug-wall pt-0">
              <div className="">
                <h2 className="section-ti-sec">{course.title}</h2>

                <div className="ug-ribbon">
                  {course.items.map((item, index) => (
                    <div key={index} className="ug-ribbon-item">
                      <span className="prog-name">{item.replace("+", "")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu  data={sideBarData?.profile} />
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
