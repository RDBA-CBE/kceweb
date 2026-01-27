"use client";
import React from "react";
import data from "../../../JSON/ACADEMIC/dept_of_csd.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";


export default function DeptOfCSDPage() {
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
