"use client";
import React from "react";

const KeyValueCard = ({ data }) => {
  return (
    <section
     className={data?.sectionbg || "section-bg1"}
    >
      <div className={`startup-section section-wid`}>
        {data?.title && <h2 className="section-ti-sec">{data.title}</h2>}

        <div className="startup-grid pt-4">
          {data?.content?.map((item, idx) => (
            <div className="startup-card" key={idx}>
              {/* Media */}
              {item?.media?.type === "image" && (
                <div className="startup-logo">
                  <img src={item.media.src} alt={item.media.alt || "media"} />
                </div>
              )}

              {/* Details */}
              <div className="startup-content">
                {item?.details?.map((detail, i) => (
                  <div className="startup-row" key={i}>
                    <span>{detail.label}</span>
                    <p>
                      :{" "}
                      {detail.url ? (
                        <a href={detail.url} target="_blank" rel="noreferrer">
                          {detail.value || detail.url}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyValueCard;
