"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FirstLetterUp } from "@/utils/functions.utils";

const Programmes = ({ programmeContent }) => {
  const router = useRouter();

  const programmeTabs = programmeContent?.programmes?.content || [];
  const curriculumTabs = programmeContent?.curriculum?.content || [];


  const [activeData, setActiveData] = useState(
    programmeTabs?.length > 0 ? programmeTabs[0] : null
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
  
    setSidebarOpen(false);
  }, [activeData]);

  if (!activeData) return <>No Data Found</>;

  return (
    <section className="kahe-transfer-wrapper d-none d-md-grid" id="programme">
      {/* LEFT SIDE CONTENT */}
      <div
        className="kahe-transfer-left"
        style={{ backgroundImage: `url(${activeData.img})` }}
      >
        <div className="kahe-transfer-img-overlay">
          <div className="kahe-transfer-text-box">
            {/* PROGRAMME TYPE SCREEN */}
            {activeData.type === "programme" &&
              activeData.items?.map((item, i) => (
                <div className="program-overlay-row d-flex" key={i}>
                  <i className="feather-chevron-right mt-2 me-3 text-white"></i>
                  <span className="main-sub-ti text-white">{FirstLetterUp(item)}</span>
                </div>
              ))}

            {/* CURRICULUM TITLE */}
            {activeData.type === "curriculum" && (
              <h3 className="main-sub-ti text-white">{FirstLetterUp(activeData.title)}</h3>
            )}

            {/* CURRICULUM SLIDER BUTTON */}
            {activeData.type === "curriculum" && (
           

               <button className="rbt-btn hover-icon-reverse mt-4" onClick={() => setSidebarOpen(true)}>

              <span className="icon-reverse-wrapper">
                <span className="btn-text">View Curricular batches</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
             
            </button>
            )}
          </div>
        </div>

        {/* SLIDING SIDEBAR PANEL */}
        <div
          className={`kahe-curriculum-slide-panel ${
            sidebarOpen ? "kahe-curriculum-slide-panel-open" : ""
          }`}
        >
          <div className="kahe-curriculum-slide-inner">
            <span
              className="kahe-curriculum-slide-close"
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </span>

            <h4 className="kahe-curriculum-slide-title">
              {activeData.title}
            </h4>

            <ul className="kahe-curriculum-slide-list">
              {activeData.items?.map((batch, i) => (
                <a
                  key={i}
                  href={batch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kahe-curriculum-year-link"
                >
                  <li className="kahe-curriculum-slide-item">{batch.year}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE LISTING */}
      <div className="kahe-transfer-right">
        <h2 className="kahe-transfer-yellow w-decor-ti">Student Programmes</h2>

        <div className="kahe-transfer-link-box">
          <h3 className="main-sub-ti">{FirstLetterUp(programmeContent.programmes.title)}</h3>
          <ul>
            {programmeTabs.map((item) => (
              <li
                key={item.key}
                className={activeData.key === item.key ? "active" : ""}
                onClick={() => setActiveData(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          <h3 className="main-sub-ti">{FirstLetterUp(programmeContent.curriculum.title)}</h3>
          <ul>
            {curriculumTabs.map((item) => (
              <li
                key={item.key}
                className={activeData.key === item.key ? "active" : ""}
                onClick={() => setActiveData(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programmes;
