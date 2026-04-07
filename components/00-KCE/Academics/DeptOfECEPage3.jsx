"use client";
import React, { useState } from "react";
import RichText from "../DepartmentCompoennts/RichText";
import CivilData from "../../../JSON/ACADEMIC/CIVIL/Civil.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { 
  FlaskConical, 
  CheckCircle, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  GraduationCap 
} from "lucide-react";

export default function DeptOfECEPage3() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { 
    department, 
    visionMission, 
    labs, 
    tabs, 
    teachingLearning 
  } = CivilData;

  const currentTab = tabs.navigation[activeIndex];
  const currentTabContent = tabs.content[currentTab.type];

  const nextTab = () => {
    setActiveIndex((prev) => (prev + 1) % tabs.navigation.length);
  };

  const prevTab = () => {
    setActiveIndex((prev) => (prev === 0 ? tabs.navigation.length - 1 : prev - 1));
  };

  return (
    <div>
      <InnerBanner data={CivilData?.banner} />
      
      {/* About Department Section */}
      <section className="wyoming-right-layout">
        <div className="wyoming-bg-right"></div>
        <div className="container-fluid">
          <div className="wyoming-right-container">
            <div className="wyoming-right-content-wrapper">
              <div className="wyoming-right-content">
                <div className="main-title-exact">
                  <h4>About the Department</h4>
                </div>
                <div className="content-wrapper">
                  <p className="content-text-exact">
                    <RichText as="em" content={department.welcome} />
                  </p>
                  {department.description.map((para, index) => (
                    <RichText key={index} as="p" className="content-text-exact" content={para} />
                  ))}
                </div>
                <div className="wyoming-buttons-exact">
                  <a href="/visit-department" className="btn-visit-exact">
                    VISIT DEPARTMENT
                  </a>
                  <a href="/request-info" className="btn-info-exact">
                    REQUEST INFO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Content Section */}
      <div className="section-bg4">
        {department.content.map((item, index) => (
          <div key={index} className="section-bg2">
            <div className="section-wid">
              <RichText as="div" className="remaining-content" content={item} />
            </div>
          </div>
        ))}
      </div>

      {/* Vision & Mission Section */}
      <div className="container">
        <div className="container py-5">
          {/* Vision */}
          <div className="row align-items-center vision-section mb-5">
            <div className="col-lg-7 position-relative">
              <img
                src={visionMission.vision.image}
                className="img-fluid main-image"
                alt="Vision"
              />
              <div className="floating-card card-right">
                <h4 className="fw-bold">{visionMission.vision.title}</h4>
                <RichText as="p" content={visionMission.vision.description} />
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="row align-items-center vision-section flex-row-reverse">
            <div className="col-lg-7 position-relative">
              <img
                src={visionMission.mission.image}
                className="img-fluid main-image"
                alt="Mission"
              />
              <div className="floating-card card-left">
                <h4 className="fw-bold">{visionMission.mission.title}</h4>
                <RichText as="p" content={visionMission.mission.description} />
              </div>
            </div>
          </div>
        </div>

        {/* Lab Facilities Section */}
        <section className="lab-section container py-5">
          <h2 className="lab-title mb-4">{labs.title}</h2>
          <div className="row g-4">
            {labs.list.map((lab, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="lab-card">
                  <div className="lab-icon">
                    <FlaskConical size={26} />
                  </div>
                  <h5 className="lab-name">{lab}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs Section */}
        <div className="container py-5">
          {/* Desktop Tabs */}
          <div className="tabs-header desktop-tabs mb-4">
            {tabs.navigation.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {activeIndex === index ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
                {tab.title}
              </button>
            ))}
          </div>

          {/* Mobile Tabs */}
          <div className="mobile-tabs mb-4">
            <button onClick={prevTab} className="arrow-btn">
              <ChevronLeft />
            </button>
            <div className="mobile-tab-title">
              <ChevronDown size={18} />
              {currentTab.title}
            </div>
            <button onClick={nextTab} className="arrow-btn">
              <ChevronRight />
            </button>
          </div>

          {/* Tab Content */}
          {currentTab.type === "peo" ? (
            <div className="container py-5 peo-section">
              <div className="row">
                <div className="col-lg-12 mb-4 mb-lg-0">
                  <ul className="peo-list improved">
                    {currentTabContent.map((peo, index) => (
                      <li key={index}>
                        <div className="peo-badge">{peo.code}</div>
                        <RichText as="p" content={peo.description} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : currentTab.type === "po" ? (
            <div className="container py-4">
              <div className="po-accent-wrapper">
                {currentTabContent.map((item, index) => (
                  <div key={index} className="po-accent-card">
                    <div className="po-badge">{item.code}</div>
                    <div className="po-content">
                      <h3>{item.title}</h3>
                      <RichText as="p" content={item.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : currentTab.type === "pso" ? (
            <div className="container py-4">
              <div className="pso-split-wrapper">
                {currentTabContent.map((pso, index) => (
                  <div key={index} className="pso-split-row">
                    <div className="pso-strip">
                      <span>{pso.code}</span>
                    </div>
                    <div className="pso-text">
                      <RichText as="p" content={pso.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container py-4">
              <div className="subject-pill-wrapper">
                {currentTabContent.subjects.map((subject, index) => (
                  <div key={index} className="subject-pill">
                    <span>{subject}</span>
                    <ArrowRight className="subject-arrow" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Teaching & Learning Section */}
      <div className="tl-wrapper">
        <section className="tl-hero text-center">
          <h1>{teachingLearning.hero.title}</h1>
          <RichText as="p" content={teachingLearning.hero.description} />
          <div className="tl-hero-actions">
            {teachingLearning.hero.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className={`tl-action ${link.type}`}
              >
                {link.text}
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </section>

        <section className="tl-curriculum">
          <div className="text-center mb-5">
            <h2>{teachingLearning.curriculum.title}</h2>
            <RichText as="p" content={teachingLearning.curriculum.description} />
          </div>
          <div className="row g-4">
            {teachingLearning.curriculum.frameworks.map((framework, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tl-card">
                  <div className="tl-card-header">
                    <div className="tl-icon">
                      {index === 0 ? <GraduationCap /> : <BookOpen />}
                    </div>
                    <h3>{framework.year}</h3>
                  </div>
                  <RichText as="p" className="tl-card-text" content={framework.description} />
                  <button className="tl-btn">
                    View Curriculum
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}