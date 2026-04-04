"use client";
import React from "react";
import data from "../../JSON/acheivemnets.json";
import RenderSection from "./RenderComponent/RenderSection";
import InnerBanner from "./common/InnerBanner";


export default function AcheivementsPage() {
  const civil = data;

  const renderSectionWrapper = (section, index) => {
    return (
      <RenderSection
        section={section}
        index={index}
        renderSection={renderSectionWrapper}
      />
    );
  };

  return (
    <div>
      <InnerBanner data={civil?.banner} />

      {civil?.sections?.map((section, index) =>
        renderSectionWrapper(section, index),
      )}
    </div>
  );
}
