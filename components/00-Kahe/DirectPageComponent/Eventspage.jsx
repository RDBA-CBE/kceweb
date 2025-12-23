"use client";
import InnerSubBanner from "@/components/00-Kahe/common-components/InnerSubBanner";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Eventspage = ({ eventsContent }) => {
  return (
    <>
      <div className="container events-pg" style={{ padding: "80px 0" }}>
        <div className="rbt-course-feature-inner">
          <div className="section-title">
            <h2 className="decor-ti">{FirstLetterUp(eventsContent.tab)}</h2>
          </div>

          <div className="rbt-accordion-style rbt-accordion-02 accordion">
            <div className="accordion" id="accordionExampleb2">
              {eventsContent.items.map((item, i) => (
                <div className="accordion-item card" key={i}>
                  <p
                    className="accordion-header card-header"
                    id={`headingTwo${i}`}
                  >
                    <button
                      className={`accordion-button ${
                        i === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseTwo${i + 1}`}
                      aria-expanded={i === 0 ? "true" : "false"}
                      aria-controls={`collapseTwo${i + 1}`}
                    >
                      {item.title}
                    </button>
                  </p>
                  <div
                    id={`collapseTwo${i + 1}`}
                    className={`accordion-collapse collapse ${
                      i === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`headingTwo${i}`}
                    data-bs-parent="#accordionExampleb2"
                  >
                    <div className="accordion-body card-body pr--0">
                      <ul className="rbt-course-main-content liststyle">
                        {item.content.map((list, subIndex) => (
                          <li key={subIndex}>
                            <Link href="/lesson">
                              <div className="course-content-left">
                                <i className="feather-file-text"></i>

                                <span
                                  className="text"
                                  dangerouslySetInnerHTML={{ __html: list }}
                                ></span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventspage;
