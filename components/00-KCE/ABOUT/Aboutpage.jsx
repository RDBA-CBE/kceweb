"use client";

import React from "react";
import Link from "next/link";

import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";
import data from "@/JSON/ABOUT/profile.json";
import sideBarData from "@/JSON/sidebar.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import SplitImageContent from "../DepartmentCompoennts/SplitImageContent";
import RichText from "../DepartmentCompoennts/RichText";

const Aboutpage = () => {
  const {
    pageTitle,
    intro,
    imageSection,
    Highlights,
    course,
  } = data;

  const campusHighlights = [
    {
      value: "15",
      label: "Centres of Excellence",
      icon: "award",
    },
    {
      value: "77",
      label: "Industrial MoUs",
      icon: "briefcase",
    },
    {
      value: "10+",
      label: "Global University Partnerships",
      icon: "globe",
    },
    {
      value: "100%",
      label: "ICT Enabled Classrooms",
      icon: "monitor",
    },
    {
      value: "3000+",
      label: "Indexed Publications",
      icon: "book-open",
    },
    {
      value: "350+",
      label: "Patents Published",
      icon: "file-text",
    },
  ];

  const campusFacilities = [
    {
      label: "Foreign Language Certifications",
      icon: "globe",
    },
    {
      label: "Wi-Fi Enabled Campus",
      icon: "wifi",
    },
    {
      label: "Secure Hostel in Campus",
      icon: "shield",
    },
    {
      label: "24/7 Lab Access",
      icon: "clock",
    },
    {
      label: "Gym & Courts",
      icon: "activity",
    },
    {
      label: "Food Courts",
      icon: "shopping-bag",
    },
    {
      label: "Vibrant Clubs",
      icon: "users",
    },
    {
      label: "Well Connected Transport",
      icon: "truck",
    },
  ];

  return (
    <section className="about-wrapper">
      <InnerBanner data={data?.banner} />

      <div className="section-wid section-bg1">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 about-content-area sidebar-com">

            {/* TOP CONTENT */}
            <div className="about-top fade-up">
              <h2 className="section-ti">
                {pageTitle}
              </h2>

              {intro.map((text, index) => (
                <RichText
                  key={index}
                  as="p"
                  content={text}
                />
              ))}
            </div>

            {/* IMAGE SECTION */}
            <div className="row about-image-section">
              <div className="col-md-6 fade-up delay-1">
                <div className="about-image-card">
                  <img
                    src={imageSection.image}
                    alt="Campus"
                  />
                </div>
              </div>

              <div className="col-md-6 fade-up delay-2">
                <div className="about-text-card">
                  {imageSection.content.map(
                    (text, index) => (
                      <RichText
                        key={index}
                        as="p"
                        content={text}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <SplitImageContent data={Highlights} />

            {/* =================================================
                KCE CAMPUS HIGHLIGHTS
            ================================================== */}

            <section className="kce-glance-section fade-up">

              {/* HEADING */}
              <div className="kce-glance-heading">
                <span className="kce-glance-eyebrow">
                  WHY KCE?
                </span>

                <h2 className="section-ti-sec kce-glance-title">
                  Your Campus. Your Opportunities.
                </h2>

                <p className="kce-glance-intro">
                  A future-ready learning environment built
                  around innovation, industry exposure,
                  research and vibrant student life.
                </p>
              </div>

              {/* MAIN STATISTICS */}
              <div className="kce-stat-grid">
                {campusHighlights.map(
                  (item, index) => (
                    <div
                      className="kce-stat-card"
                      key={item.label}
                    >
                      <div className="kce-stat-icon">
                        <i
                          className={`feather-${item.icon}`}
                        ></i>
                      </div>

                      <div className="kce-stat-content">
                        <strong>
                          {item.value}
                        </strong>

                        <span>
                          {item.label}
                        </span>
                      </div>

                      <span className="kce-stat-decoration">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* CAMPUS LIFE */}
              <div className="kce-campus-experience">
                <div className="kce-campus-experience-title">
                  <span>
                    BEYOND ACADEMICS
                  </span>

                  <h3>
                    Everything You Need for Campus Life
                  </h3>
                </div>

                <div className="kce-facility-grid">
                  {campusFacilities.map(
                    (item) => (
                      <div
                        className="kce-facility-card"
                        key={item.label}
                      >
                        <div className="kce-facility-icon">
                          <i
                            className={`feather-${item.icon}`}
                          ></i>
                        </div>

                        <span>
                          {item.label}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* PROGRAMMES */}
            <section className="abt ug-wall pt-0">
              <div>
                <h2 className="section-ti-sec">
                  {course.title}
                </h2>

                <div className="ug-ribbon">
                  {course.items.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="ug-ribbon-item"
                      >
                        <Link href={item.url}>
                          <span className="prog-name">
                            {item.name}
                          </span>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT MENU */}
          <SideMenu
            data={sideBarData?.profile}
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;