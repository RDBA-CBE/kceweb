"use client";
import React from "react";
import data from "../../JSON/admission_center.json";
import RenderSection from "./RenderComponent/RenderSection";
import InnerBanner from "./common/InnerBanner";


export default function AdmissionPage() {
  const civil = data;

  const renderSectionWrapper = (section, index) => {
    return (
      <RenderSection
        key={index}
        section={section}
        index={index}
        renderSection={renderSectionWrapper}
      />
    );
  };

  return (
    <div>
      <InnerBanner data={civil?.banner1} />

      {civil?.sections1?.map((section, index) =>
        renderSectionWrapper(section, index),
      )}
    </div>
  );
}
