"use client";

import React from "react";
import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";
import data from "@/JSON/examinations/services.json";
import sideBarData from "@/JSON/sidebar.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import RenderSection from "../RenderComponent/RenderSection";

const ContactPage = () => {

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
    <section className="">
      <InnerBanner
        data={pageData?.banner}
      />
      <div className="section-wid section-bg1 ">
        <div className="row sidebar-com">
          {/* LEFT CONTENT */}
          <div className="col-lg-9">
            {pageData?.sections?.map((section, index) =>
              renderSectionWrapper(section, index),
            )}
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu data={sideBarData?.profile} />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
