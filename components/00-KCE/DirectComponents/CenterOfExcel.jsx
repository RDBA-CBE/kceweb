"use client";
import React from "react";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import data from "@/JSON/centerOfExcel.json";
import RenderSection from "../RenderComponent/RenderSection";

export default function CenterOfExcel() {

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
    <section className="coe-modern">
      <InnerBanner data={pageData?.banner} />

      {pageData?.sections?.map((section, index) =>
        renderSectionWrapper(section, index),
      )}
    </section>
  );
}
