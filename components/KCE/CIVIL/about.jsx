"use client";
import React from "react";

const WyomingRightSide = () => {
  return (
    <section className="wyoming-right-layout">
      {/* Background Image */}
      <div className="wyoming-bg-right"></div>

      {/* Content Container */}
      <div className="container-fluid">
        <div className="wyoming-right-container">
          <div className="wyoming-right-content-wrapper">
            <div className="wyoming-right-content">
              {/* Main Title */}
              <div className="main-title-exact">
                <h4> About the Department</h4>
              </div>

              {/* Content Paragraphs */}
              <div className="content-wrapper">
                <p className="content-text-exact">
                  The <em>Department of Civil Engineering</em> welcomes students
                  to experience a one- of-a-kind education in structural
                  innovation and sustainable development. With our dedication to
                  academic excellence and student-focused education, we provide
                  an environment where students can thrive both academically and
                  professionally.
                </p>

                <p className="content-text-exact">
                  The department of Civil Engineering was started in the year
                  2008. It offers under graduate course in Civil Engineering
                  with an intake of 60 students. Our main goal is to be the{" "}
                  <em>Centre of Excellence</em> for the development and
                  dissemination of knowledge in Structural Engineering,
                  Construction Engineering and Management, Water Resources and
                  Management, Transportation, Environmental Engineering, Urban
                  Engineering, Geotechnical Engineering, Remote sensing, GIS and
                  its applications.
                </p>

                <p className="content-text-exact">
                  Admission to the <em>Department of Civil Engineering</em> is
                  just the first step to achieving your dreams in building the
                  infrastructure of tomorrow.
                </p>
              </div>

              {/* Buttons */}
              <div className="wyoming-buttons-exact">
                <a href="/visit-department" className="btn-visit-exact">
                  VISIT DEPARTMENT
                </a>
                <a href="/request-info" className="btn-info-exact">
                  REQUEST INFO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WyomingRightSide;
