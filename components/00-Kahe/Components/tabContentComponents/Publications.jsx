"use client";
import { FirstLetterUp } from "@/utils/functions.utils";
import { useState } from "react";

export default function Publications({publicationsContent}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log("publicationsContent",publicationsContent);

    const visibilityItems = toggle
    ? publicationsContent.content
    : publicationsContent.content.slice(0, 8);
  

  return (
    <>
      <div
        className={`rbt-course-feature-box publication  mt--30`}
       
      >
        <div className="research-acc-wrapper has-show-more-inner-content">

          <div className="section-title">
            <h2
              className="decor-ti"
             
            >{FirstLetterUp(publicationsContent.subtitle)}</h2>
          </div>

          <h3 className="main-sub-ti">{FirstLetterUp(publicationsContent?.title)}</h3>

          {publicationsContent?.content?.map((item, index) => (
            <div className="research-acc-item" key={index}>
              <button
                className={`research-acc-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: index % 2 === 0 ? "#a2d0aa" : "#f2fff9",
                  color: index % 2 === 0 ? "#000" : "#1C3C4A",
                }}
              >
                <span className="faculty-ti">{item.faculty_name}</span>
                <span className="research-acc-icon">
                  <i class="feather-chevron-down"></i>
                </span>
              </button>

              <div
                className="research-acc-body"
                style={{
                  display: activeIndex === index ? "block" : "none",
                  backgroundColor: index % 2 === 0 ? "#f2fff9" : "#f2fff9",
                }}
              >
                <ol>
                  {item.content.map((pub, idx) => (
                    <li key={idx}>{pub}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Show Less" : "Show More"}
        </div> */}
      </div>
    </>
  );
}
