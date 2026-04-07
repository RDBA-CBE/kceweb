"use client";
import { useState } from "react";
import styles from "./ProgrammesSection.module.css";
import RichText from "@/components/00-KCE/DepartmentCompoennts/RichText";

const data = [
  {
    title: "All Programmes",
    items: [
      {
        groupTitle: "UG Programmes",
        list: [
          "B.E. Civil Engineering *",
          "B.E. Computer Science and Engineering *",
          "B.E. Computer Science and Engineering (Cyber Security)",
          "B.E. Electronics and Communication Engineering *",
          "B.E. Electrical and Electronics Engineering *",
          "B.E. Electronics Engineering (VLSI Design and Technology)",
          "B.E. Mechanical Engineering *",
          "B.Tech. Artificial Intelligence and Data Science",
          "B.Tech. Information Technology *"
        ],
        note: "* Accredited by NBA"
      },
      {
        groupTitle: "PG Programmes",
        list: [
          "MBA - Master of Business Administration",
          "MCA - Master of Computer Applications"
        ]
      }
    ]
  },

  {
    title: "UG Programmes",
    desc: "Explore KCE’s undergraduate programmes that combine academic excellence with practical learning, empowering students to build successful futures.",
    groupTitle: "UG Programmes",
    items: [
      "B.E. Civil Engineering *",
      "B.E. Computer Science and Engineering *",
      "B.E. Computer Science and Engineering (Cyber Security)",
      "B.E. Electronics and Communication Engineering *",
      "B.E. Electrical and Electronics Engineering *",
      "B.E. Electronics Engineering (VLSI Design and Technology)",
      "B.E. Mechanical Engineering *",
      "B.Tech. Artificial Intelligence and Data Science",
      "B.Tech. Information Technology *"
    ],
    note: "* Accredited by NBA"
  },

  {
    title: "PG Programmes",
    desc: "At KCE, our postgraduate programmes are crafted to foster intellectual growth, research excellence, and professional advancement.",
     groupTitle: "PG Programmes",
    items: [
      "MBA - Master of Business Administration",
      "MCA - Master of Computer Applications"
    ]
  }
];

export default function ProgrammesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h2 className={styles.heading}>PROGRAMMES FOR YOU</h2>

        <div className={styles.layout}>
          
          {/* LEFT ORANGE CARD */}
          <div className={styles.orangeCard}>
            <div className={styles.orangeContent}>
              {data.map((item, i) => (
                <div key={i} className={`${styles.tab} ${active === i ? styles.activeTab : ""}`}  onClick={() => setActive(i)}>
                  <h3>› {item.title}</h3>
                  {item.desc && <RichText as="p" content={item.desc} />}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.list}>
            
            {typeof data[active].items[0] === "object" ? (

              // ✅ ALL PROGRAMMES (Grouped)
              data[active].items.map((group, idx) => (
                <div key={idx} className={styles.group}>
                  
                  <h5 className={styles.groupTitle}>
                    {group.groupTitle}
                  </h5>
                  {group.list.map((item, i) => (
                    <div key={i} className={styles.listItem}>
                      <span>›</span> {item}
                    </div>
                  ))}

                  {group.note && (
                    <p className={styles.note}>{group.note}</p>
                  )}
                </div>
              ))

            ) : (

              // ✅ UG / PG NORMAL LIST
              <>
                {data[active].items.map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <span>›</span> {item}
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