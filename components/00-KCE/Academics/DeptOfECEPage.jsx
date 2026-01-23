"use client";
import React, { useState } from "react";
import data from "../../../JSON/ACADEMIC/CIVIL/Civil_new.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { ChevronDown, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import RenderSection from "./RenderSection";

export default function DeptOfECEPage() {
  const civil = data;

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

  const renderSectionWrapper = (section, index) => {
    return <RenderSection section={section} index={index} renderSection={renderSectionWrapper} />;
  };

  return (
    <div>
      <InnerBanner data={civil?.banner} />

      {civil?.sections?.map((section, index) => renderSectionWrapper(section, index))}

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
              renderSectionWrapper(section, index),
            )
          ) : currentTabContent?.sections ? (
            currentTabContent.sections.map((section, index) =>
              renderSectionWrapper(section, index),
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
