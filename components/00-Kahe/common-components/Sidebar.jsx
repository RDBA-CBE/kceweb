"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

const Sidebar = ({ checkMatchCourses, subMenu }) => {
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  // =====> For video PopUp
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 200;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("subMenu");

  return (
    <>
      <div className="content-item-content in-sidebar ">
        <div
          className={`rbt-widget-details has-show-more ${
            toggle ? "active" : ""
          }`}
        >
          <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
            {subMenu?.content?.map((item, innerIndex) => (
              <li key={innerIndex} className="mb-2 d-flex flex-column">
                <span>
                  <Link href={`/kahe/${item.link}` || "#"}>
                    {item.category || item.name}
                  </Link>
                </span>

                {item.items && item.items.length > 0 && (
                  <ul className="mt-2 ms-1">
                    {item.items.map((sub, subIndex) => (
                      <li key={subIndex} className="mb-1">
                        <span>
                          <Link href={`/kahe/${sub.link}`}>{sub.name}</Link>
                        </span>

                        {sub.item && sub.item.length > 0 && (
                          <ul className="mt-2 ms-1">
                            {sub.item.map((innerSub, idx) => (
                              <li key={idx}>
                                <span>
                                  <Link href={innerSub.link}>
                                    {`/kahe/${innerSub.name}`}
                                  </Link>
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* <div
            className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            Show More
          </div> */}
        </div>
      </div>

      
    </>
  );
};

export default Sidebar;
