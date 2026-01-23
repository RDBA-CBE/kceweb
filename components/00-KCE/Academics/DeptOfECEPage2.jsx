"use client";
import React, { useState } from "react";
import data from "../../../JSON/ACADEMIC/CIVIL/Civil_new.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import ImageOverlayCard from "../DepartmentCompoennts/ImageOverlayCard";
import PlainPara from "../DepartmentCompoennts/PlainPara";
import HalfCardImage from "../DepartmentCompoennts/HalfCardImage";
import ImageOverlayContent from "../DepartmentCompoennts/ImageOverlayContent";
import CardGrid from "../DepartmentCompoennts/CardGrid";
import IconCard from "../DepartmentCompoennts/IconCard";
import DepartmentTabsSection from "../DepartmentCompoennts/DepartmentTabsSection";
import CardList1 from "../DepartmentCompoennts/CardList1";
import CardList2 from "../DepartmentCompoennts/CardList2";
import CardList3 from "../DepartmentCompoennts/CardList3";
import SplitImageContent from "../DepartmentCompoennts/SplitImageContent";

export default function DeptOfECEPage2() {
  const civil = data;

  console.log("data", data);

  const renderSection = (section, index) => {
    switch (section.type) {
      case "image-overlay-card":
        return <ImageOverlayCard key={index} data={section.data} />;

      case "plain-para":
        return (
          <section className="section-bg3">
            <PlainPara key={index} data={section.data} />
          </section>
        );
      case "half-card-img":
        return (
          <section className="section-wid section-bg1">
            <HalfCardImage key={index} data={section.data} />
          </section>
        );

      case "image-overlay-content":
        return <ImageOverlayContent key={index} data={section.data} />;

      case "card-grid":
        return (
          <section className="section-wid section-bg1">
            <CardGrid key={index} data={section.data} />
          </section>
        );

      case "icon-card":
        return (
          <section className=" section-bg3">
            <div className="section-wid">
              <IconCard key={index} data={section.data} />
            </div>
          </section>
        );

      case "card-list1":
        return (
          <section className=" section-bg1">
            <div className="section-wid">
              <CardList1 key={index} data={section.data} />
            </div>
          </section>
        );
      case "card-list2":
        return (
          <section className=" section-bg1">
            <div className="section-wid">
              <CardList2 key={index} data={section.data} />
            </div>
          </section>
        );

      case "card-list3":
        return (
          <section className=" section-bg1">
            <div className="section-wid">
              <CardList3 key={index} data={section.data} />
            </div>
          </section>
        );

      case "split-image-content":
        return <SplitImageContent key={index} data={section.data} />;

      case "tabs":
        return (
          <DepartmentTabsSection
            key={index}
            data={section.data}
            renderSection={renderSection}
          />
        );

      default:
        return null;
    }
  };

  const tabs = civil?.tabs;
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTab = tabs?.navigation?.[activeIndex];
  const currentTabContent = tabs?.content?.[currentTab?.type];

  const nextTab = () => {
    setActiveIndex((prev) =>
      prev === tabs.navigation.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTab = () => {
    setActiveIndex((prev) =>
      prev === 0 ? tabs.navigation.length - 1 : prev - 1,
    );
  };

  return (
    <div>
      <InnerBanner data={civil?.banner} />

      {civil?.sections?.map((section, index) => renderSection(section, index))}

      {tabs && (
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
              {currentTab?.title}
            </div>
            <button onClick={nextTab} className="arrow-btn">
              <ChevronRight />
            </button>
          </div>

          {Array.isArray(currentTabContent) ? (
            currentTabContent.map((section, index) =>
              renderSection(section, index),
            )
          ) : currentTabContent?.sections ? (
            currentTabContent.sections.map((section, index) =>
              renderSection(section, index),
            )
          ) : (
            /* fallback for non-section data like smartClass */
            <div className="container py-4">
              <div className="subject-pill-wrapper">
                {currentTabContent?.subjects?.map((subject, index) => (
                  <div key={index} className="subject-pill">
                    <span>{subject}</span>
                    <ArrowRight className="subject-arrow" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
