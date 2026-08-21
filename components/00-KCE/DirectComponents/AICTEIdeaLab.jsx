"use client";

import React, { useEffect, useState } from "react";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import data from "@/JSON/aicteidealab.json";
import RenderSection from "../RenderComponent/RenderSection";
import "./AICTEIdeaLab.css";

export default function AICTEIdeaLab() {
  const pageData = data;

  const [lightboxImage, setLightboxImage] = useState(null);

  const renderSectionWrapper = (section, index) => {
    return (
      <RenderSection
        key={`${section?.type}-${index}`}
        section={section}
        index={index}
        renderSection={renderSectionWrapper}
      />
    );
  };

  const getPhoneLink = (phone = "") => {
    return phone.replace(/[^\d+]/g, "");
  };

  useEffect(() => {
    if (!lightboxImage) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  const PersonCard = ({ person }) => {
    if (!person) return null;

    return (
      <article className="aicte-person-card">
        {person.image && (
          <div className="aicte-person-img">
            <img
              src={person.image}
              alt={person.name || "AICTE IDEA Lab Team Member"}
              loading="lazy"
            />
          </div>
        )}

        <div className="aicte-person-content">
          {person.role && (
            <span className="aicte-role">
              {person.role}
            </span>
          )}

          {person.name && <h4>{person.name}</h4>}

          {person.designation && (
            <p className="aicte-designation">
              {person.designation}
            </p>
          )}

          {person.department && (
            <p>{person.department}</p>
          )}

          {person.institution && (
            <p>{person.institution}</p>
          )}

          {(person.email || person.phone) && (
            <div className="aicte-contact">
              {person.email && (
                <a href={`mailto:${person.email}`}>
                  {person.email}
                </a>
              )}

              {person.phone && (
                <a
                  href={`tel:${getPhoneLink(person.phone)}`}
                >
                  {person.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section className="coe-modern aicte-idea-lab-page">

      {/* =========================
          BANNER
      ========================== */}
      <InnerBanner data={pageData?.banner} />

      {/* Keep existing RenderSection support */}
      {pageData?.sections?.map((section, index) =>
        renderSectionWrapper(section, index)
      )}

      {/* =========================
          ABOUT IDEA LAB
      ========================== */}
      {pageData?.about && (
        <section className="section-bg3 aicte-about-section">
          <div className="section-wid">
            <div className="aicte-section">

              <div className="aicte-section-title">
                <h2>{pageData.about.title}</h2>
              </div>

              <div className="aicte-about-card">

                {pageData.about.logo && (
                  <div className="aicte-about-logo-area">
                    <div className="aicte-about-logo">
                      <img
                        src={pageData.about.logo}
                        alt="AICTE IDEA Lab Logo"
                      />
                    </div>

                    <div
                      className="aicte-about-logo-decoration"
                      aria-hidden="true"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}

                <div className="aicte-about-content">
                  {pageData.about.content?.map(
                    (paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    )
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================
          VISION
      ========================== */}
      {pageData?.vision && (
        <section className="section-bg1 aicte-vision-section">
          <div className="section-wid">
            <div className="aicte-section">

              <div className="aicte-section-title">
                <h2>{pageData.vision.title}</h2>
              </div>

              <div className="aicte-vision">
                <span
                  className="aicte-vision-mark"
                  aria-hidden="true"
                >
                  “
                </span>

                <p>{pageData.vision.content}</p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================
          MISSION
      ========================== */}
      {pageData?.mission?.items?.length > 0 && (
        <section className="section-bg3 aicte-mission-section">
          <div className="section-wid">
            <div className="aicte-section">

              <div className="aicte-section-title">
                <h2>{pageData.mission.title}</h2>
              </div>

              <div className="aicte-mission-grid">
                {pageData.mission.items.map(
                  (item, index) => (
                    <article
                      className="aicte-mission-card"
                      key={item.id || index}
                    >
                      <span className="aicte-count">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="aicte-mission-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  )
                )}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================
          OBJECTIVES
      ========================== */}
      {pageData?.objectives?.items?.length > 0 && (
        <section className="section-bg1 aicte-objectives-section">
          <div className="section-wid">
            <div className="aicte-section">

              <div className="aicte-section-title">
                <h2>{pageData.objectives.title}</h2>
              </div>

              <div className="aicte-objective-list">
                {pageData.objectives.items.map(
                  (item, index) => (
                    <article
                      className="aicte-objective-card"
                      key={item.id || index}
                    >
                      <span className="aicte-objective-count">
                        {index + 1}
                      </span>

                      <div className="aicte-objective-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  )
                )}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================
          TEAM
      ========================== */}
      {pageData?.team && (
        <section className="section-bg3 aicte-team-shell">
          <div className="section-wid">
            <div className="aicte-section">

              <div className="aicte-section-title">
                <h2>{pageData.team.title}</h2>
              </div>

              {/* CHIEF MENTOR */}
              {pageData.team.chiefMentor && (
                <div className="aicte-team-section aicte-chief-section">
                  <div className="aicte-team-title">
                    <h3>Chief Mentor</h3>
                  </div>

                  <div className="aicte-chief-mentor">
                    <PersonCard
                      person={pageData.team.chiefMentor}
                    />
                  </div>
                </div>
              )}

              {/* FACULTY COORDINATORS */}
              {pageData.team.facultyCoordinators?.length > 0 && (
                <div className="aicte-team-section aicte-faculty-section">
                  <div className="aicte-team-title">
                    <h3>Faculty Coordinators</h3>
                  </div>

                  <div className="aicte-faculty-grid">
                    {pageData.team.facultyCoordinators.map(
                      (person, index) => (
                        <PersonCard
                          key={`${person.name}-${index}`}
                          person={person}
                        />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* TECH GURUS */}
              {pageData.team.techGurus?.length > 0 && (
                <div className="aicte-team-section aicte-tech-section">
                  <div className="aicte-team-title">
                    <h3>Tech Gurus</h3>
                  </div>

                  <div className="aicte-team-grid aicte-tech-grid">
                    {pageData.team.techGurus.map(
                      (person, index) => (
                        <PersonCard
                          key={`${person.name}-${index}`}
                          person={person}
                        />
                      )
                    )}
                  </div>
                </div>
              )}

              {/* STUDENT AMBASSADORS */}
              {pageData.team.studentAmbassadors?.length > 0 && (
                <div className="aicte-team-section">
                  <div className="aicte-team-title">
                    <h3>Student Ambassadors</h3>
                  </div>

                  <div className="aicte-team-grid aicte-student-grid">
                    {pageData.team.studentAmbassadors.map(
                      (person, index) => (
                        <PersonCard
                          key={`${person.name}-${index}`}
                          person={person}
                        />
                      )
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* =========================
          IDEA LAB EQUIPMENT
      ========================== */}
      {pageData?.equipment?.items?.length > 0 && (
        <section className="section-bg1 aicte-equipment-section">
          <div className="section-wid">
            <div className="aicte-section">

              <div className="aicte-equipment-header">
                <div>
                  <span className="aicte-equipment-label">
                    {pageData.equipment.subtitle ||
                      "Innovation Infrastructure"}
                  </span>

                  <h2>
                    {pageData.equipment.title ||
                      "IDEA Lab Equipment"}
                  </h2>

                  <p>
                    {pageData.equipment.description ||
                      "Explore the advanced prototyping, fabrication and innovation facilities available at the AICTE IDEA Lab."}
                  </p>
                </div>

               
              </div>

              <div className="aicte-equipment-grid">
                {pageData.equipment.items.map(
                  (item, index) => (
                    <article
                      className="aicte-equipment-card"
                      key={`${item.title}-${index}`}
                    >

                      <button
                        type="button"
                        className="aicte-equipment-image-button"
                        onClick={() =>
                          setLightboxImage(item)
                        }
                        aria-label={`View ${item.title} image`}
                      >
                        <div className="aicte-equipment-img">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                          />

                          <div className="aicte-equipment-overlay">
                            <span className="aicte-zoom-icon">
                              +
                            </span>

                            <span>View Image</span>
                          </div>
                        </div>
                      </button>

                      <div className="aicte-equipment-title">
                        <h4>{item.title}</h4>

                        <button
                          type="button"
                          className="aicte-equipment-arrow"
                          onClick={() =>
                            setLightboxImage(item)
                          }
                          aria-label={`View ${item.title}`}
                        >
                          ↗
                        </button>
                      </div>

                    </article>
                  )
                )}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================
          LIGHTBOX
      ========================== */}
      {lightboxImage && (
        <div
          className="aicte-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxImage.title} image preview`}
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="aicte-lightbox-dialog"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="aicte-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>

            <div className="aicte-lightbox-image">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
              />
            </div>

            <div className="aicte-lightbox-caption">
              <h3>{lightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}