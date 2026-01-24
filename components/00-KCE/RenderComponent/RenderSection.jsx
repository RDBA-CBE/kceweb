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
import DepartmentTabsSection from "../DepartmentCompoennts/DepartmentTabsSection";
import VideoCardSection from "../DepartmentCompoennts/VideoCardSection";

const RenderSection = ({ section, index, renderSection }) => {
  switch (section.type) {
    
    case "tabs":
      return (
        <DepartmentTabsSection
          key={index}
          data={section.data}
          renderSection={renderSection}
        />
      );

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

    case "video-card":
      return (
        <section className="section-bg1">
          <div className="section-wid">
            <VideoCardSection key={index} data={section.data} />
          </div>
        </section>
      );

    default:
      return null;
  }
};

export default RenderSection;
