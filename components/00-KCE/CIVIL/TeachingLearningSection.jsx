"use client";

import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

export default function TeachingLearningPage() {
  return (
    <div className="tl-wrapper">
      {/* ================= HERO ================= */}
      <section className="tl-hero text-center">
        <h1>Teaching & Learning</h1>
        <p>
          Empowering students through structured curriculum, digital platforms
          and outcome-based education.
        </p>

        <div className="tl-hero-actions">
          <a href="#" className="tl-action primary">
            Course Development (YouTube & Blogs)
            <ArrowRight size={18} />
          </a>

          <a href="#" className="tl-action secondary">
            Google Classroom – Odd Semester 2024–25
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="tl-curriculum">
        <div className="text-center mb-5">
          <h2>Curriculum Framework</h2>
          <p>
            Industry-aligned curriculum designed to enhance theoretical and
            practical competencies.
          </p>
        </div>

        <div className="row g-4">
          {[
            { year: "R2023", icon: <GraduationCap /> },
            { year: "R2018", icon: <BookOpen /> },
            { year: "R2017", icon: <BookOpen /> },
          ].map((item) => (
            <div key={item.year} className="col-lg-4 col-md-6">
              <div className="tl-card">
                <div className="tl-card-header">
                  <div className="tl-icon">{item.icon}</div>
                  <h3>{item.year}</h3>
                </div>

                <p className="tl-card-text">
                  Structured syllabus focusing on outcome-based education,
                  skill development and industry readiness.
                </p>

                <button className="tl-btn">
                  View Curriculum
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
