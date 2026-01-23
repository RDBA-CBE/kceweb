import Link from "next/link";
import React from "react";

const PillList = ({ data }) => {
  return (
    <section className="scr-section">
      <div className="scr-container">
        {/* Heading */}
        <div className="scr-header">
          <h2 className="section-ti">{data?.title}</h2>
          <p className="">{data?.description}</p>
        </div>

        {/* List */}
        <div className="scr-list">
          {data?.items.map((item) => (
            <Link href={item?.url || "#"} target={item?.target || "_blank"}>
              <div className="scr-card" key={item.id}>
                <span className="scr-card-text">{item.label}</span>
                <span className="scr-card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillList;
