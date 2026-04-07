import React from "react";
import Link from "next/link";

const HalfCardImagenew = ({ data }) => {
  return (
    <div className="HalfCardImage">
      <div className="py-5">
        {data?.content?.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`row align-items-center vision-section ${
                isReverse ? "flex-row-reverse" : ""
              }`}
              style={{marginBottom:"100px"}}
            >
              <div className="col-lg-7 position-relative">
                <img
                  src={item.image}
                  className="img-fluid main-image"
                  alt={item.title || "achievement"}
                />

                {/* Names overlay at bottom of image */}
                {item.names && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(28,60,74,0.82)",
                      color: "#fff",
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textAlign: "center",
                      borderRadius: "0 0 20px 20px",
                    }}
                  >
                    {item.names}
                  </div>
                )}

                {/* Floating card */}
                <div
                  className={`floating-card ${isReverse ? "card-left" : "card-right"}`}
                  style={{ background: item.bg || "#fff", color: item.textColor || "var(--color-heading)" }}
                >
                  {/* Logos */}
                  {item.logos && (
                    <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                      {item.logos.map((logo, i) => (
                        <img
                          key={i}
                          src={logo.src}
                          alt={logo.alt || "logo"}
                          style={{ height: logo.height || 32, width: "auto", objectFit: "contain" }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Badge */}
                  {item.badge && (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--kce-accent)",
                        marginBottom: 4,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}

                  {/* subTitle above mainTitle (e.g. "Our Students won") */}
                  {item.subTitle && (
                    <p style={{ fontSize: 13, color: item.textColor || "var(--color-body)", marginBottom: 2 }}>
                      {item.subTitle}
                    </p>
                  )}

                  {/* Main big title */}
                  {item.mainTitle && (
                    <h2
                      style={{
                        fontSize: "clamp(26px, 3.5vw, 28px)",
                        
                        lineHeight: 1.1,
                        color: item.mainTitleColor || "var(--kce-accent)",
                        marginBottom: 6,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.mainTitle}
                    </h2>
                  )}

                  {/* Title */}
                  {item.title && (
                    <h4 className="sub-ti" style={{ color: item.titleColor || "inherit", textTransform: "uppercase" }}>
                      {item.title}
                    </h4>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: item.textColor || "var(--color-body)", marginBottom: 8 }}>
                      {item.description}
                    </p>
                  )}

                  {/* List */}
                  {item.list && (
                    <ul className="vm-list">
                      {item.list.map((li, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  {item.link && (
                    <Link
                      href={item.link.href}
                      target={item.link.target || "_self"}
                      className="rbt-btn-link mt-2"
                      style={{ fontSize: 14, fontWeight: 600, color: "var(--kce-accent)" }}
                    >
                      <span className="rbt-btn-link">{item.link.text}</span>
                      <i className="feather-arrow-up-right ms-1" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HalfCardImagenew;
