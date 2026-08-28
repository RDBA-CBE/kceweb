"use client";
import React from "react";

const KnowledgeResources = ({ data }) => {
  if (!data) return null;

  return (
    <section className="knowledge-resources-section section-bg1">
      <div className="section-wid">
        <div className="knowledge-resources-head">
          {data.title && <h2>{data.title}</h2>}
          {data.description && <p>{data.description}</p>}
        </div>

        <div className="knowledge-resources-grid">
          {data.items?.map((item, index) => (
            <div className="knowledge-resource-card" key={index}>
              {item.value && (
                <div className="knowledge-resource-value">
                  {item.value}
                </div>
              )}

              {item.text && (
                <div className="knowledge-resource-text">
                  {item.text}
                </div>
              )}

              {item.highlight && (
                <div className="knowledge-resource-highlight">
                  {item.highlight}
                </div>
              )}

              {item.description && (
                <p className="knowledge-resource-description">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeResources;