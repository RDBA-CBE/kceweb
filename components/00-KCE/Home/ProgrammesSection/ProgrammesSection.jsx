"use client";

import { useState } from "react";
import styles from "./ProgrammesSection.module.css";
import RichText from "@/components/00-KCE/DepartmentCompoennts/RichText";
import Link from "next/link";

const data = [
  {
    title: "All Programmes",
    type: "group",
    items: [
      {
        groupTitle: "UG Programmes",
        list: [
          { title: "B.E. Civil Engineering *", href: "/department-of-civil-engineering" },
          { title: "B.E. Computer Science and Engineering *", href: "/department-of-computer-science-and-engineering" },
          {
            title: "B.E. Computer Science and Engineering (Cyber Security)",
            href: "/department-of-computer-science-and-engineering-cyber-security",
          },
          {
            title: "B.E. Electronics and Communication Engineering *",
            href: "/department-of-electronics-and-communication-engineering",
          },
          { title: "B.E. Electrical and Electronics Engineering *", href: "/department-of-electrical-and-electronics-engineering" },
          {
            title: "B.E. Electronics Engineering (VLSI Design and Technology)",
            href: "/department-of-electronics-engineering-vlsi-design-and-technology",
          },
          { title: "B.E. Mechanical Engineering *", href: "/department-of-mechanical-engineering" },
          {
            title: "B.Tech. Artificial Intelligence and Data Science",
            href: "/department-of-artificial-intelligence-and-data-science",
          },
          { title: "B.Tech. Information Technology *", href: "/department-of-information-technology" },
        ],
        note: "* Accredited by NBA",
      },
      {
        groupTitle: "PG Programmes",
        list: [
          { title: "MBA - Master of Business Administration", href: "/department-of-management-studies" },
          { title: "MCA - Master of Computer Applications", href: "/department-of-mca" },
        ],
      },
    ],
  },
  {
    title: "UG Programmes",
    type: "list",
    desc: "Explore KCE’s undergraduate programmes that combine academic excellence with practical learning, empowering students to build successful futures.",
    items: [
      { title: "B.E. Civil Engineering *", href: "/department-of-civil-engineering" },
      { title: "B.E. Computer Science and Engineering *", href: "/department-of-computer-science-and-engineering" },
      {
        title: "B.E. Computer Science and Engineering (Cyber Security)",
        href: "/department-of-computer-science-and-engineering-cyber-security",
      },
      { title: "B.E. Electronics and Communication Engineering *", href: "/department-of-electronics-and-communication-engineering" },
      { title: "B.E. Electrical and Electronics Engineering *", href: "/department-of-electrical-and-electronics-engineering" },
      {
        title: "B.E. Electronics Engineering (VLSI Design and Technology)",
        href: "/department-of-electronics-engineering-vlsi-design-and-technology",
      },
      { title: "B.E. Mechanical Engineering *", href: "/department-of-mechanical-engineering" },
      { title: "B.Tech. Artificial Intelligence and Data Science", href: "/department-of-artificial-intelligence-and-data-science" },
      { title: "B.Tech. Information Technology *", href: "/department-of-information-technology" },
    ],
    note: "* Accredited by NBA",
  },
  {
    title: "PG Programmes",
    type: "list",
    desc: "At KCE, our postgraduate programmes are crafted to foster intellectual growth, research excellence, and professional advancement.",
    items: [
      { title: "MBA - Master of Business Administration", href: "/department-of-management-studies" },
      { title: "MCA - Master of Computer Applications", href: "/department-of-mca" },
    ],
  },
];

export default function ProgrammesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h2 className={styles.heading}>PROGRAMMES FOR YOU</h2>

        <div className={styles.layout}>
          {/* LEFT TABS */}
          <div className={styles.orangeCard}>
            <div className={styles.orangeContent}>
              {data.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.tab} ${
                    active === i ? styles.activeTab : ""
                  }`}
                  onClick={() => setActive(i)}
                >
                  <h3>› {item.title}</h3>
                  {item.desc && <RichText as="p" content={item.desc} />}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.list}>
            {data[active].type === "group" ? (
              // ✅ GROUP VIEW
              data[active].items.map((group, idx) => (
                <div key={idx} className={styles.group}>
                  <h5 className={styles.groupTitle}>{group.groupTitle}</h5>

                  {group.list.map((item, i) => (
                    <div key={i} className="mb-4">
                      {" "}
                      <Link href={item.href || "#"} className={styles.listItem}>
                        <span>›</span> {item.title}
                      </Link>
                    </div>
                  ))}

                  {group.note && <p className={styles.note}>{group.note}</p>}
                </div>
              ))
            ) : (
              // ✅ NORMAL LIST
              <>
                {data[active].items.map((item, i) => (
                  <div key={i} className="mb-4">
                    <Link href={item.href || "#"} className={styles.listItem}>
                      <span>›</span> {item.title}
                    </Link>
                  </div>
                ))}

                {data[active].note && (
                  <p className={styles.note}>{data[active].note}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <svg
        className={styles.bottomWave}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C480,140 960,140 1440,0 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
