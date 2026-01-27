"use client";
import React from "react";
import data from "@/JSON/campus/clubs.json";
import InnerBanner from "../common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";

export default function ClubsPage() {
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
