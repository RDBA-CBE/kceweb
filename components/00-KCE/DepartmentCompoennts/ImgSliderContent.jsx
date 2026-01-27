"use client";

import React from "react";
import Slider from "../common/Slider";

const ImgSliderContent = ({ data }) => {
  const useSlider = data?.images?.length > 3;

  return (
    <div className={data?.sectionbg || "section-bg1"}>
      <section className={` imgmc-wrapper section-wid`}>
        <div
          className={`imgmc-container row ${
            data?.imagePosition === "right" ? "imgmc-reverse" : ""
          }`}
        >
          {/* LEFT IMAGE AREA */}

          <div className="col-lg-5 mx-0 swiper rbt-dot-bottom-center banner-swiper-active">
            {useSlider ? (
              <Slider data={data} />
            ) : (
              <div className="imgmc-media-grid">
                {data?.images.map((img, idx) => (
                  <div className="imgmc-media-box" key={idx}>
                    <img src={img} alt={`media-${idx}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="imgmc-content col-lg-7">
            {data?.content?.map((item, idx) => {
              switch (item.type) {
                case "title":
                  return (
                    <h2 className="section-ti" key={idx}>
                      {item.mainTi}
                    </h2>
                  );

                case "paragraph":
                  return item.text?.map((para, i) => (
                    <p key={`${idx}-${i}`}>{para}</p>
                  ));

                case "logo":
                  return (
                    <div className="imgmc-logo" key={idx}>
                      <img src={item.src} alt={item.alt || "logo"} />
                    </div>
                  );

                case "list":
                  return (
                    <ul className="imgmc-list" key={idx}>
                      {item.items?.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  );

                case "button":
                  return (
                    <button
                      key={idx}
                      className="imgmc-btn"
                      onClick={() => console.log(item.action)}
                    >
                      {item.text}
                    </button>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImgSliderContent;
