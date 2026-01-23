"use client";
import React from "react";
import Link from "next/link";

const InnerBanner = ({ data }) => {
  return (
    <div className="kce-inner-banner position-relative overflow-hidden">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: `url(${data?.bannerImg || "/images/kce/banner_civil.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 banner-overlay"></div>

      {/* Content */}
      <div className="section-wid h-100 position-relative z-2">
        <div className="row h-100 align-items-center">
          <div className="col-12 pb-4">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-2">
              <ol className="breadcrumb mb-0">
                {(data?.breadcrumb || []).map((item, i) => (
                  <li
                    key={i}
                    className={`breadcrumb-item ${!item.href ? "active" : ""}`}
                    aria-current={!item.href ? "page" : undefined}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-white text-decoration-none hover-warning"
                      >
                        {i === 0 && <i className="bi bi-house-door me-2"></i>}
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Department Name with Decorative Line */}
            <div className="d-flex align-items-center mt-2">
              <div className="decorative-line me-3 d-none d-lg-block"></div>
              <h1 className="banner-title text-white fw-bold mb-0">
                {data?.title || "Civil Engineering"}
              </h1>
            </div>
            {/* <p className="text-white mt-3 mb-0 subtitle">
              Building Sustainable Infrastructure Since 2008
            </p> */}
            {/* Optional Subtitle */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
