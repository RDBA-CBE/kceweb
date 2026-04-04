"use client";
import React from "react";
import data from "@/JSON/undergraduate_program.json";
import InnerBanner from "../common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";
import sideBarData from "@/JSON/sidebar.json";
import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";

export default function UndergraduateProgramPage() {
  const pageData = data;
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
    <>
      <InnerBanner data={pageData?.banner} />
      <div className="section-wid section-bg1">
        <div className="row">
          <div className="col-lg-9 management-content-area">
            {pageData?.sections?.map((section, index) =>
              renderSectionWrapper(section, index)
            )}
          </div>
          <SideMenu data={sideBarData?.undergraduateProgram} />

        </div>
      </div>
    </>
  );
}
