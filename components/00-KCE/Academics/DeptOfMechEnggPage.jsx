"use client";
import React from "react";
import data from "../../../JSON/ACADEMIC/dept_of_mechengg.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";

export default function DeptOfMechEnggPage() {
  const pageData = data;

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
      <InnerBanner data={pageData?.banner} />

      {pageData?.sections?.map((section, index) =>
        renderSectionWrapper(section, index),
      )}
    </div>
  );
}
