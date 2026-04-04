"use client";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import Link from "next/link";
import React from "react";
import data from "@/JSON/ABOUT/programs_offered.json";

export default function CourseOffPage() {
  const { banner, admission, ug, pg, research } = data;

  return (
    <>
      <InnerBanner data={banner} />

      {/* Admission Panel */}
      

      {/* UG Programmes */}
      <section className="ug-wall">
        <div className="container">
          <h2 className="section-ti-sec">{ug.title}</h2>

          <div className="ug-ribbon">
            {ug.items.map((item, index) => (
              <Link key={`ug-${index}`} href={item.path} className="ug-ribbon-item">
                <span className="prog-name">{item.title}</span>
              </Link>
            ))}
          </div>

          <p className="ug-wall-note">{ug.note}</p>
        </div>
      </section>


      {/* PG Programmes */}

      <section className="abt ug-wall">
        <div className="container">
          <h2 className="section-ti-sec">{pg.title}</h2>

          <div className="ug-ribbon">
            {pg.items.map((item, index) => (
              <Link key={`pg-${index}`} href={item.path} className="ug-ribbon-item">
                <span className="prog-name">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* <p className="ug-wall-note">{pg.note}</p> */}
        </div>
      </section>

      {/* PG & Research */}
      {/* <section className="rail-section">
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
      </section> */}
    </>
  );
}
