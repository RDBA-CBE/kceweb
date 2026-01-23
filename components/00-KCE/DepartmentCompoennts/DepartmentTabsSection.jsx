"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

/**
 * TabsSection
 * -------------
 * data = {
 *   navigation: [],
 *   content: {
 *     peo: { sections: [] },
 *     po: { sections: [] },
 *     ...
 *   }
 * }
 */
const DepartmentTabsSection = ({ data, renderSection }) => {
  const { navigation = [], content = {} } = data;

  const [activeIndex, setActiveIndex] = useState(0);

  const currentTab = navigation[activeIndex];
  const currentTabContent = content?.[currentTab?.id];

  const nextTab = () => {
    setActiveIndex((prev) =>
      prev === navigation.length - 1 ? 0 : prev + 1
    );
  };

  const prevTab = () => {
    setActiveIndex((prev) =>
      prev === 0 ? navigation.length - 1 : prev - 1
    );
  };

  if (!navigation.length) return null;

  return (
    <section className="section-bg1">
      <div className="pt-5">
        {/* ================= Desktop Tabs ================= */}
        <div className="section-wid tabs-header desktop-tabs mb-4">
          {navigation.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-btn ${
                activeIndex === index ? "active" : ""
              }`}
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

        {/* ================= Mobile Tabs ================= */}
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

        {/* ================= Tab Content ================= */}
        <div className="tab-content-wrapper">
          {currentTabContent?.sections?.length ? (
            currentTabContent.sections.map((section, index) =>
              renderSection(section, index)
            )
          ) : (
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
      </div>
    </section>
  );
};

export default DepartmentTabsSection;
