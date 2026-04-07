"use client";

import React from "react";
import RichText from "./RichText";

const CardGrid = ({data}) => {
  return (
    <section className="cg-section">
      <div className="cg-container">
        <h2 className="cg-title section-ti">{data?.title}</h2>

        <div className="cg-grid">
          {data?.content.map((content) => (
            <div key={content.id} className="cg-card">
              <RichText as="p" className="cg-course-name sub-ti" content={content.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
