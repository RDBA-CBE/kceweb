"use client";

import React, { useState } from "react";
import Link from "next/link";

import data from "../../JSON/acheivemnetsnew.json";
import InnerBanner from "./common/InnerBanner";
import styles from "./AcheivementsPage.module.css";

export default function AcheivementsPage() {
  const [activeTab, setActiveTab] = useState("students");

  const tabs = [
    {
      id: "students",
      label: "Students",
      items: data?.students || [],
    },
    {
      id: "faculty",
      label: "Faculty",
      items: data?.faculty || [],
    },
  ];

  const activeTabData =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div>
      <InnerBanner data={data?.banner} />

      <section className={styles.KCAchievementsSection}>
        <div className="container">
          <div
            className={styles.KCAchievementsTabs}
            role="tablist"
            aria-label="Achievement categories"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  id={`KC-${tab.id}-tab`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`KC-${tab.id}-panel`}
                  className={`${styles.KCAchievementsTabButton} ${
                    isActive
                      ? styles.KCAchievementsTabButtonActive
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id={`KC-${activeTab}-panel`}
            className={styles.KCAchievementsTabContent}
            role="tabpanel"
            aria-labelledby={`KC-${activeTab}-tab`}
          >
            {activeTabData?.items?.length > 0 ? (
              <div className={`row ${styles.KCAchievementsRow}`}>
                {activeTabData.items.map((item, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={item?.id || `${activeTab}-${index}`}
                  >
                    <article className={styles.KCAchievementCard}>
                      <div
                        className={
                          styles.KCAchievementImageWrapper
                        }
                      >
                        {item?.image ? (
                          <img
                            src={item.image}
                            alt={item?.title || "Achievement"}
                            className={
                              styles.KCAchievementImage
                            }
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className={
                              styles.KCAchievementImagePlaceholder
                            }
                          >
                            <span>Achievement</span>
                          </div>
                        )}
                      </div>

                      <div
                        className={styles.KCAchievementContent}
                      >
                        <h3
                          className={styles.KCAchievementTitle}
                        >
                          {item?.title}
                        </h3>

                        {item?.link && (
                          <a
                            href={item.link}
                            className={
                              styles.KCAchievementLink
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Know more about ${
                              item?.title || "this achievement"
                            }`}
                          >
                            <span>Know More</span>

                            <span
                              className={
                                styles.KCAchievementLinkArrow
                              }
                              aria-hidden="true"
                            >
                              →
                            </span>
                          </a>
                        )}
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.KCAchievementsEmpty}>
                No achievements are available in this category.
              </div>
            )}
          </div>

          <div className={styles.KCAchievementsArchiveWrapper}>
            <Link
              href="/achievements-archive"
              className={styles.KCAchievementsArchiveLink}
            >
              <span>More Achievements</span>

              <span
                className={styles.KCAchievementsArchiveArrow}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}