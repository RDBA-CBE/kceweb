

"use client";
import React from "react";
import data from "@/JSON/undertaking.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import RenderSection from "@/components/00-KCE/RenderComponent/RenderSection";

export default function UnderTakingPage() {
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
    <>
      <InnerBanner data={pageData?.banner} />

      {pageData?.sections?.map((section, index) =>
        renderSectionWrapper(section, index),
      )}
    </>
  );
}

