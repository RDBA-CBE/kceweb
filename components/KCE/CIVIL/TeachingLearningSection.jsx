"use client";

import { ArrowRight } from "lucide-react";

export default function TeachingLearningSection() {
  return (
    <div className="container py-5 teaching-section">

      {/* ===== Teaching & Learning ===== */}
      <div className="text-center mb-5">
        <h2 className="section-title">Teaching And Learning</h2>
        <p className="section-desc">
          Lorem ipsum dolor sit amet consectetur. Pulvinar nulla sapien velit
          ultrices neque pretium pulvinar. Urna netus sed et in.
        </p>
      </div>

      <div className="row justify-content-center gap-4 mb-5">
        <div className="col-lg-5 col-md-10">
          <div className="pill-card">
            <span>Course Development Through YouTube and Blogs</span>
            <ArrowRight />
          </div>
        </div>

        <div className="col-lg-5 col-md-10">
          <div className="pill-card">
            <span>Google Classroom Details Odd Semester – 2024–2025</span>
            <ArrowRight />
          </div>
        </div>
      </div>

      {/* ===== Curriculum ===== */}
      <div className="text-center mb-5">
        <h2 className="section-title">Curriculum</h2>
        <p className="section-desc">
          Lorem ipsum dolor sit amet consectetur. Pulvinar nulla sapien velit
          ultrices neque pretium pulvinar.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {["R2023", "R2018", "R2017"].map((item) => (
          <div className="col-lg-4 col-md-6" key={item}>
            <div className="curriculum-card">
              <h4>{item}</h4>
              <p>
                Tortor nisl elit pulvinar pellentesque libero varius libero
                ullamcorper.
              </p>
              <button className="view-btn">VIEW MORE</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
