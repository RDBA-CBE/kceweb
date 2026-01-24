"use client";
import React from "react";
import data from "../../../JSON/ACADEMIC/CIVIL/Civil_new.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";


export default function DeptOfECEPage() {
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
