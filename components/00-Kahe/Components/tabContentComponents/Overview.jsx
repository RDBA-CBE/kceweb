"use client";

import { FirstLetterUp } from "@/utils/functions.utils";
import React, { useEffect, useState } from "react";
import ImageCard from "../ImageCard";

const Overview = ({ overviewContent }) => {
  const overviewItem = overviewContent?.find(
    (item) => item.type === "overview"
  );
  const visionItem = overviewContent?.find((item) => item.type === "vision");
  const missionItem = overviewContent?.find((item) => item.type === "mission");

  const [sliceCount, setSliceCount] = useState(2);
  const [paragraphs, setParagraphs] = useState([]);

  // Split the content string into chunks by character length
  const splitByCharLength = (text, maxLength = 500) => {
    const sentences = text
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s + ".");

    const result = [];
    let current = "";

    sentences.forEach((sentence) => {
      if ((current + " " + sentence).trim().length > maxLength) {
        if (current) result.push(current.trim());
        current = sentence; // start new block
      } else {
        current += " " + sentence;
      }
    });

    if (current.trim()) result.push(current.trim());

    return result;
  };

  useEffect(() => {
    const updateSlice = () => {
      if (window.innerWidth >= 1750) {
        setSliceCount(3);
      } else {
        setSliceCount(2);
      }
    };

    updateSlice(); // initial check
    window.addEventListener("resize", updateSlice);

    return () => window.removeEventListener("resize", updateSlice);
  }, []);

  useEffect(() => {
    if (overviewItem?.contents) {
      setParagraphs(splitByCharLength(overviewItem.contents, 350));
    }
  }, [overviewItem]);

  if (!overviewItem) return null;

  const firstPart = paragraphs.slice(0, sliceCount);
  const remaining = paragraphs.slice(sliceCount);

  return (
    <div className="overview-main-wrapper" id="overview">
      <div className="overview-flex section-bg1">
        <div className="overview-left">
          <div className="overview-left-in">
          
              <h2
                className="decor-ti"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(overviewItem.subTitle),
                }}
              ></h2>
           
            {firstPart.map((text, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
            ))}

            {/* <button className="kahe-btn-primary rbt-btn hover-icon-reverse mt-4" >

              <span className="icon-reverse-wrapper">
                <span className="btn-text">Apply Now</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
             
            </button> */}
          </div>
        </div>

        <div className="overview-right">
          <img src={overviewItem.image} alt="overview image" />
        </div>
      </div>

      <div className="section-bg2 " style={{ margin: "40px 0" }}>
        <div className="section-wid ">
          {remaining.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>
      </div>

      {(visionItem || missionItem) && (
        <div className="section-wid section-bg1">
          <ImageCard visionItem={visionItem} missionItem={missionItem} />

          {/* {visionItem && (
          <div className="mt-4">
            <div className="section-title">
              <h3
                className="main-sub-ti"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(visionItem.subTitle),
                }}
              ></h3>
            </div>
            <ul className="rbt-list-style-1">
              {visionItem.content.map((v, i) => (
                <li key={i}>
                  <i className="feather-check"></i>
                  <span dangerouslySetInnerHTML={{ __html: v }}></span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {missionItem && (
          <div className="mt-4">
            <div className="section-title">
              <h3
                className="main-sub-ti"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(missionItem.subTitle),
                }}
              ></h3>
            </div>
            <ul className="rbt-list-style-1">
              {missionItem.content.map((v, i) => (
                <li key={i}>
                  <i className="feather-check"></i>
                  <span dangerouslySetInnerHTML={{ __html: v }}></span>
                </li>
              ))}
            </ul>
          </div>
        )} */}
        </div>
      )}

      {/* remaining paragraphs below image */}
    </div>
  );
};

export default Overview;
