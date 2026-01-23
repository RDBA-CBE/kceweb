// DoubleColList.jsx
import React from "react";

const DoubleColList = ({ data }) => {
  if (!data) return null;

  return (
    <section className="dcl-section">
      <div className="dcl-container">
        <div className="dcl-header">
          {data.title && <h2 className="dcl-title">{data.title}</h2>}
          {data.description && <p className="dcl-description">{data.description}</p>}
        </div>

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
                      <span>{item.label}</span>
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
