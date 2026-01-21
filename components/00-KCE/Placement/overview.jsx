"use client";

import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import Image from "next/image";
import React from "react";
import data from "@/JSON/PLACEMENT/overview.json";

export default function Overview() {
  const { banner, platform } = data;

  return (
    <div>
      <InnerBanner data={banner} />

      <section className="section-bg1 platform-marker-section">
        <div className="section-wid">
          <div className="marker-layout">
            {/* CONTENT */}
            <div className="marker-content">
              <span className="marker-line"></span>

              <h2>{platform.title}</h2>

              {platform.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* IMAGE */}
            <div className="marker-image">
              <Image
                src={platform.image.src}
                alt={platform.image.alt}
                width={platform.image.width}
                height={platform.image.height}
                className="marker-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
