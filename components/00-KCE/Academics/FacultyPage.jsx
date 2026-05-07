"use client";

import React from "react";
import InnerBanner from "../common/InnerBanner";
import RichText from "../DepartmentCompoennts/RichText";

const FacultyPage = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <InnerBanner data={data?.banner} />
      <section className="section-bg1">
        <div className="section-wid">
          <div className="text-center mb-5">
            <h2 className="section-ti">{data?.sectionTi}</h2>
            <RichText as="p" content={data?.desc} />
          </div>

          <div className="row g-5 py-5">
            {data?.faculty.map((faculty, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                <div className="faculty-modern-card">
                  <div className="faculty-avatar">
                    <img src={faculty.src} alt={faculty.name} />
                  </div>

                  <div className="faculty-modern-body">
                    <h5 className="sub-ti">{faculty.name}</h5>
                    <span className="ti-badge-wbg ">
                      {faculty.designation}
                    </span>
                    <p className="faculty-modern-designation mt-2">
                      {faculty.degree}
                    </p>
                  </div>

                  {faculty.email && (
                    <div className="faculty-hover-info">
                      <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyPage;
