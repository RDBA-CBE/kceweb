"use client";

import React from "react";

const AICTEIdeaLabContent = ({ data }) => {
  return (
    <section className="section-bg1">
      <div className="section-wid">
        <h2>{data?.about?.title}</h2>

        {data?.about?.content?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
};

export default AICTEIdeaLabContent;