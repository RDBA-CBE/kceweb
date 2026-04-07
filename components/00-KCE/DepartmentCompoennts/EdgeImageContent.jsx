"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonActions } from "@/utils/buttonActions";

const EdgeImageContent = ({ data }) => {
  const router = useRouter();
  const isLeft = data?.imagePosition === "left";

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "paragraph": {
        const texts = Array.isArray(block.text) ? block.text : [block.text];
        return (
          <React.Fragment key={index}>
            {texts?.map((text, i) => (
              <p key={i} className="ci-text">
                {text}
              </p>
            ))}
          </React.Fragment>
        );
      }

      case "title":
        return (
          <div key={index}>
            {block.mainTi && <h3 className="section-ti">{block.mainTi}</h3>}
            {block.title && <h4 className="sub-ti">{block.title}</h4>}
            {block.subTi && <p className="ti-badge-wbg">{block.subTi}</p>}
          </div>
        );

      case "list":
        return (
          <ul key={index} className="svm-list mb-4">
            {block.items.map((li, i) => (
              <li key={i} className="pb-3">
                <img
                  className="vm-liImg"
                  src={block?.bullet || "/images/kce/right.png"}
                  alt=""
                />
                <span dangerouslySetInnerHTML={{ __html: li }}></span>
              </li>
            ))}
          </ul>
        );

      case "card":
        return (
          <ul key={index} className="efi-card-con">
            {block.items.map((li, i) => (
              <span className="efi-card" key={i}>
                <span dangerouslySetInnerHTML={{ __html: li }} />
              </span>
            ))}
          </ul>
        );

      case "link":
        return (
          <p key={index}>
            <Link href={block.href} class="read-more-btn" target="_blank">
              <span class="rbt-btn-link">
                {block.text}
                <i class="feather-arrow-up-right"></i>
              </span>
            </Link>
          </p>
        );

      case "button": {
        const ButtonInner = (
          <span className="icon-reverse-wrapper">
            <span className="btn-text">{block.text}</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        );

        // ✅ 1. HREF BASED BUTTON
        if (block.href) {
          return (
            <Link
              key={index}
              href={block.href}
              className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
              target={block.target || "_blank"}
            >
              {ButtonInner}
            </Link>
          );
        }

        // ✅ 2. ACTION BASED BUTTON
        if (block.action && buttonActions[block.action]) {
          return (
            <div
              key={index}
              onClick={() =>
                buttonActions[block.action]({
                  sectionData: block?.newpageData, // 👈 FULL section data
                  block, // 👈 button block data
                  router, // 👈 helpers
                })
              }
              className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
              style={{ cursor: "pointer" }}
            >
              {ButtonInner}
            </div>
          );
        }

        return null;
      }

      default:
        return null;
    }
  };

  return (
    <section className={`${data?.sectionbg || ""} efi-section`}>
      <div className="efi-con">
        <div className={`efi-content ${isLeft ? "efi-left" : "efi-right"}`}>
          {/* FLOAT IMAGE */}
          <div className={`efi-float-image ${data?.noMblImg ? "d-none d-md-block" : ""}`}>
            <img src={data.image} alt={data.name || ""} />
          </div>

          {/* CONTENT */}
          {data.secTitle && <h2 className="section-ti">{data.secTitle}</h2>}
          {data.mainTitle && <h3 className="sub-ti">{data.mainTitle}</h3>}
          {data.caption && <p className="ti-badge-wbg">{data.caption}</p>}

          {data.content?.map(renderBlock)}

          <div className="clearfix"></div>
        </div>
      </div>
    </section>
  );
};

export default EdgeImageContent;
