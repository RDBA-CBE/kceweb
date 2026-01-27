"use client";
import Link from "next/link";
import React from "react";

const SplitColContent = ({ data }) => {
  return (
    <section className={data?.sectionbg || "section-bg1"}>
      <div className={` logo-groups-section section-wid `}>
        <div className="logo-groups-grid">
          {data?.content?.map((section, idx) => (
            <div className="logo-group" key={idx}>
              <h3 className="section-ti">{section.title}</h3>

              {section.description && <p>{section.description}</p>}

              <div className="logo-group-logos pt-5 row">
                {section.images?.map((logo, i) => (
                  <div className="logo-box col-6 col-sm-4" key={i}>
                    <img src={logo.src} alt={logo.alt || "logo"} />
                  </div>
                ))}
              </div>

              {section?.button && (
                <div className={"mt-5"}>
                  {section?.button.map((item, index) => (
                    <p key={index}>
                      <Link
                        href={item.url}
                        class="read-more-btn"
                        target="_blank"
                      >
                        <span class="rbt-btn-link">
                          {item.text}
                          <i class="feather-arrow-up-right"></i>
                        </span>
                      </Link>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitColContent;
