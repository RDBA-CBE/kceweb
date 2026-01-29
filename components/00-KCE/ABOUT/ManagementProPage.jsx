"use client";

import SideMenu from "@/components/00-KCE/ABOUT/sideMenu";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import React from "react";
import sideBarData from "@/JSON/sidebar.json";
import data from "@/JSON/ABOUT/management-profile.json";

export default function ManagementProPage() {
  const { banner, leaders, sideMenu } = data;

  return (
    <section>
      <InnerBanner data={banner} />

      <div className="section-wid section-bg1 my-5">
        <div className="row">
          <div className="col-lg-9 management-content-area">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className={`leader-row ${leader.reverse ? "reverse" : ""}`}
              >
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                </div>

                <div className="leader-content">
                  <span className="ti-badge-wbg">{leader.role}</span>
                  <h2 className="section-ti mt-1">{leader.name}</h2>

                  {leader.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SideMenu active="About Karpagam" data={sideBarData?.profile} />
        </div>
      </div>
    </section>
  );
}
