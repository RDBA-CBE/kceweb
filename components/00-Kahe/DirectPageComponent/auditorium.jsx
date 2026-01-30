"use client";
import React from "react";
import data from "@/JSON/auditorium.json";
import RenderSection from "@/components/00-KCE/RenderComponent/RenderSection";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";

export default function AuditoriumPage() {
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
