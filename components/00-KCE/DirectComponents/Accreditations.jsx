"use client";

import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { Award, CheckCircle } from "lucide-react";
import React from "react";
import data from "@/JSON/ABOUT/accreditation.json";

export default function Accreditations() {
  const { banner, naac, nba, industry, electives } = data;

  return (
    <section className="accreditation-dashboard">
      <InnerBanner data={banner} />

      <div className="section-wid py-5">
        <div className="row g-4">
          {/* NAAC Panel */}
          <div className="col-lg-4">
            <div className="dash-card naac">
              <div className="dash-header">
                <Award size={22} />
                <span>{naac.label}</span>
              </div>

              <div className="dash-body">
                <h3>{naac.title}</h3>
                <p className="dash-text">{naac.description}</p>

                <div className="metric-box">
                  {naac.metrics.map((m, i) => (
                    <div key={i}>
                      <span className="metric-label">{m.label}</span>
                      <strong>{m.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* NBA Panel */}
          <div className="col-lg-8">
            <div className="dash-card nba">
              <div className="dash-header">
                <Award size={22} />
                <span>{nba.label}</span>
              </div>

              <div className="dash-body">
                <h3>{nba.title}</h3>
                <p className="dash-text mb-4">{nba.description}</p>

                <div className="programme-grid">
                  {nba.departments.map((dept, index) => (
                    <div key={index} className="programme-tile">
                      <CheckCircle size={16} />
                      <span>{dept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Collaborations */}
        <section className="section-bg1 partners-showcase">
          <div className="section-wid">
            <div className="section-header text-center mb-5">
              <h2>{industry.title}</h2>
              <p>{industry.subtitle}</p>
            </div>

            <div className="showcase-grid">
              {industry.partners.map((item, index) => (
                <div key={index} className="showcase-item">
                  <span className="side-band"></span>
                  <div className="content">
                    <img src={item.logo} alt={item.title} />
                    <h6>{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Electives */}
        <section className="section-bg1 partners-anchor-section">
          <div className="section-wid">
            <div className="anchor-header text-center mb-5">
              <h2>{electives.title}</h2>
              <p>{electives.subtitle}</p>
            </div>

            <div className="anchor-grid">
              {electives.partners.map((item, index) => (
                <div key={index} className="anchor-box">
                  <span className="corner-anchor"></span>
                  <img src={item.logo} alt={item.title} />
                  <h6>{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
