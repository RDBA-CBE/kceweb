"use client";
import React from "react";
import data from "@/JSON/campus/arts-culture.json";
import InnerBanner from "../common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";

export default function ArtsCulture() {
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
