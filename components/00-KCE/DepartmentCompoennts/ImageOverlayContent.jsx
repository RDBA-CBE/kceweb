"use client";

import Link from "next/link";
import React from "react";

const ImageOverlayContent = ({ data }) => {
  return (
    <section
      className="ioc-wrapper "
      style={{ backgroundImage: `url(${data?.bgImage})` }}
    >
      <div className="ioc-overlay">
        <div className="ioc-container section-wid">
          <div className="ioc-row">
            {/* Left Column */}
            <div className="ioc-left-col">
              
              <h2 className="section-ti text-white mb-0 mt-5">{data?.title}</h2>

              {data?.subtitle && (
                <p className="mt-4">{data?.subtitle}</p>
              )}
            </div>

            {/* Right Column */}
            <div className="ioc-right-col">
              <ul className="ioc-list">
                {data?.list?.map((item, index) =>
                  item?.url ? (
                    <li key={index} className="ioc-list-item">
                      <Link href={item?.url} target={item?.target || "_blank"}>{item?.title}</Link>
                    </li>
                  ) : (
                    <li key={index} className="ioc-list-item">
                      {item?.title}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageOverlayContent;
