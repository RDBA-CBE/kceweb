"use client";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import React from "react";
import data from "@/JSON/ABOUT/courses-offered.json";

export default function CourseOffPage() {
  const { banner, admission, ug, pg, research } = data;

  return (
    <>
      <InnerBanner data={banner} />

      {/* Admission Panel */}
      <section className="admission-panel">
        <div className="section-wid">
          <div className="row align-items-stretch">
            {/* LEFT CONTENT */}
            <div className="col-lg-7 admission-left">
              <h2 className="section-ti">{admission.title}</h2>

              {admission.blocks.map((b, i) => (
                <div key={i} className="admission-block">
                  <h4 className="sub-ti">{b.title}</h4>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5 admission-right">
              <img src={admission.image.src} alt={admission.image.alt} />
              <div className="admission-tag">{admission.image.tag}</div>
            </div>
          </div>
        </div>
      </section>

      {/* UG Programmes */}
      <section className="ug-wall">
        <div className="container">
          <h2 className="section-ti-sec">{ug.title}</h2>

          <div className="ug-ribbon">
            {ug.items.map((item, index) => (
              <div key={index} className="ug-ribbon-item">
                <span className="prog-name">{item.replace("+", "")}</span>
                {item.includes("+") && <span className="prog-badge">NBA</span>}
              </div>
            ))}
          </div>

          <p className="ug-wall-note">{ug.note}</p>
        </div>
      </section>

      {/* PG & Research */}
      <section className="rail-section">
        <div className="section-wid">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="rail-block">
                <div className={`rail-line ${pg.line}`}></div>
                <h2 className="section-ti">{pg.title}</h2>
                <ul>
                  {pg.items.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rail-block">
                <div className={`rail-line ${research.line}`}></div>
                <h2 className="section-ti">{research.title}</h2>
                <ul>
                  {research.items.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
                <p className="rail-note">{research.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
