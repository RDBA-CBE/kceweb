"use client";
import Link from "next/link";
import React from "react";

const SplitColContent = ({ data }) => {
  const renderBlock = (block, index) => {
    switch (block.type) {
      case "title":
        return <h3 className="section-ti">{block.text}</h3>;

      case "paragraph":
        return <p>{block.text}</p>;

      case "images":
        return (
          <div className="logo-group-logos pt-5 row pb-5">
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
          <ul className="dcl-list pt-2">
            {block.items.map((item) => (
              <li key={item.id}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dcl-item"
                  >
                    <span className="dcl-bullet">✓</span>
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <div className="dcl-item">
                    <span className="dcl-bullet">✓</span>
                    <span>{item.label}</span>
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
