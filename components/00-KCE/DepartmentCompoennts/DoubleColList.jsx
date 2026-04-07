// DoubleColList.jsx
import React from "react";
import RichText from "./RichText";

const DoubleColList = ({ data }) => {
  if (!data) return null;

  return (
    <section className="dcl-section">
      <div className="dcl-container py-5">
        {data.title && <h2 className="dcl-title">{data.title}</h2>}
        {data.description && (
          <RichText as="p" className="dcl-description" content={data.description} />
        )}

        <div className="dcl-grid">
          {data.columns.map((col) => (
            <div key={col.id} className="dcl-column">
              {col.heading && <h3 className="section-ti">{col.heading}</h3>}
              {col.subTi && <h3 className="sub-ti">{col.subTi}</h3>}

              <ul className="dcl-list">
                {col.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dcl-item"
                    >
                      <span className="dcl-bullet">✓</span>
                      <RichText as="span" content={item.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoubleColList;
