"use client";

import React from "react";

const CardGrid = ({data}) => {
  return (
    <section className={`section-wid ${data?.sectionbg || "section-bg1"}`}>
    <div className="cg-section">
      <div className="cg-container">
        <h2 className="cg-title section-ti">{data?.title}</h2>

        <div className="cg-grid">
          {data?.content.map((content) => (
            <div key={content.id} className="cg-card">
              <p className="cg-course-name sub-ti">
                {content.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default CardGrid;
