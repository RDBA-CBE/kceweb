"use client";

import React, { useEffect, useState } from "react";
import InnerBanner from "../common/InnerBanner";

const FacultyPage = () => {
  const [facultyContent, setFacultyContent] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("facultyData");
    if (data) {
      setFacultyContent(JSON.parse(data));
    }
  }, []);

  if (!facultyContent) return <div>Loading...</div>;
  console.log("facultyContent", facultyContent);

  return (
    <>
      <InnerBanner data={facultyContent?.banner} />
      <section className="section-bg1">
        <div className="section-wid">
          {/* Title */}
          <div className="text-center mb-5">
            <h2 className="section-ti">{facultyContent?.sectionTi}</h2>
            <p >
              {facultyContent?.desc}
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="row g-5 py-5">
            {facultyContent?.faculty.map((faculty) => (
              <div key={faculty.id} className="col-xl-3 col-lg-4 col-md-6">
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
