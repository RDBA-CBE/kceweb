"use client";
import Link from "next/link";
import React from "react";
import RichText from "./RichText";

const SplitColContent = ({ data }) => {
  const renderBlock = (block, index) => {
    switch (block.type) {
      case "title":
        return <h3 key={index} className="section-ti">{block.text}</h3>;

      case "paragraph":
        return <RichText key={index} as="p" content={block.text} />;

      case "images":
        return (
          <div key={index} className="logo-group-logos pt-5 row pb-5">
            {block.items?.map((logo, i) => (
              <div className="logo-box col-6 col-sm-4" key={i}>
                <img src={logo.src} alt={logo.alt || "logo"} />
              </div>
            ))}
          </div>
        );

      case "link":
        return (
          <p key={index}>
            <Link
              href={block.url}
              className="read-more-btn"
              target={block.target || "_blank"}
            >
              <span className="rbt-btn-link">
                {block.text}
                <i className="feather-arrow-up-right"></i>
              </span>
            </Link>
          </p>
        );

      case "list":
        return (
          <ul key={index} className="dcl-list pt-2">
            {block.items.map((item, i) => (
              <li key={item.id ?? i}>
                {item.url ? (
                  <a
                    href={item.url}
                    target={block.target || "_blank"}
                    rel="noopener noreferrer"
                    className="dcl-item"
                  >
                    <span className="dcl-bullet">✓</span>
                    <RichText as="span" content={item.label} />
                  </a>
                ) : (
                  <div className="dcl-item">
                    <span className="dcl-bullet">✓</span>
                    <RichText as="span" content={item.label} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <section className={data?.sectionbg || "section-bg1"}>
      <div className="logo-groups-section section-wid">
        <div className="logo-groups-grid">
          {data?.content?.map((section, index) => (
            <div className="logo-group" key={index}>
              {/* DYNAMIC BLOCKS */}
              {section.blocks?.map(renderBlock)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitColContent;
