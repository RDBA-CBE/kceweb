"use client";
import React from "react";
import ImageOverlayCard from "../DepartmentCompoennts/ImageOverlayCard";
import PlainPara from "../DepartmentCompoennts/PlainPara";
import HalfCardImage from "../DepartmentCompoennts/HalfCardImage";
import ImageOverlayContent from "../DepartmentCompoennts/ImageOverlayContent";
import CardGrid from "../DepartmentCompoennts/CardGrid";
import IconCard from "../DepartmentCompoennts/IconCard";
import CardList1 from "../DepartmentCompoennts/CardList1";
import CardList2 from "../DepartmentCompoennts/CardList2";
import CardList3 from "../DepartmentCompoennts/CardList3";
import SplitImageContent from "../DepartmentCompoennts/SplitImageContent";
import TableCom from "../DepartmentCompoennts/TableCom";
import PillList from "../DepartmentCompoennts/PillList";
import DoubleColList from "../DepartmentCompoennts/DoubleColList";
import VideoSection from "../DepartmentCompoennts/VideoSection";
import DepartmentTabsSection from "../DepartmentCompoennts/DepartmentTabsSection";

const RenderSection = ({ section, index, renderSection }) => {
  switch (section.type) {
    case "image-overlay-card":
      return <ImageOverlayCard key={index} data={section.data} />;

    case "plain-para":
      return (
        <section className="section-bg3">
          <PlainPara key={index} data={section.data} />
        </section>
      );

    case "half-card-img":
      return (
        <section className="section-wid section-bg1">
          <HalfCardImage key={index} data={section.data} />
        </section>
      );

    case "image-overlay-content":
      return <ImageOverlayContent key={index} data={section.data} />;

    case "card-grid":
      return (
        <section className="section-wid section-bg1">
          <CardGrid key={index} data={section.data} />
        </section>
      );

    case "icon-card":
      return (
        <section className="section-bg3">
          <div className="section-wid">
            <IconCard key={index} data={section.data} />
          </div>
        </section>
      );

    case "card-list1":
      return (
        <section className="section-bg1">
          <div className="section-wid">
            <CardList1 key={index} data={section.data} />
          </div>
        </section>
      );

    case "card-list2":
      return (
        <section className="section-bg1">
          <div className="section-wid">
            <CardList2 key={index} data={section.data} />
          </div>
        </section>
      );

    case "card-list3":
      return (
        <section className="section-bg1">
          <div className="section-wid">
            <CardList3 key={index} data={section.data} />
          </div>
        </section>
      );

    case "split-image-content":
      return <SplitImageContent key={index} data={section.data} />;

    case "table":
      return (
        <section className="section-bg1">
          <div className="section-wid">
            <TableCom key={index} data={section.data} />
          </div>
        </section>
      );

    case "pill-list":
      return (
        <section className="section-bg3">
          <div className="section-wid">
            <PillList key={index} data={section.data} />
          </div>
        </section>
      );

    case "double-col-list":
      return (
        <section className="section-bg3">
          <div className="section-wid">
            <DoubleColList key={index} data={section.data} />
          </div>
        </section>
      );

    // case "media":
    //   return (
    //     <section className="section-bg3">
    //       <div className="section-wid">
    //         <VideoSection key={index} data={section.data} />
    //       </div>
    //     </section>
    //   );

    case "tabs":
      return (
        <DepartmentTabsSection
          key={index}
          data={section.data}
          renderSection={renderSection}
        />
      );

    default:
      return null;
  }
};

export default RenderSection;
