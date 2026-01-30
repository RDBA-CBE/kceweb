"use client";

import Link from "next/link";
import React from "react";

const ContactCard = ({ data }) => {
  return (
    <section className={data?.sectionbg || "section-bg1"}>
      <div className="contactus-section section-wid">
        <div className="row g-5">
          {/* Image Left */}
          {data?.content?.image?.position === "left" &&
            data?.content?.image?.src && (
              <div className="col-md-6 contactus-image mb-4 mb-md-0">
                <img
                  src={data?.content.image.src}
                  alt={data?.content.image.alt || "Contact Image"}
                  className="img-fluid rounded shadow"
                />
              </div>
            )}

          {/* Content */}
          <div className="col-md-6 contactus-content">
            {data?.content?.text?.map((item, index) => (
              <div key={index}>
                {item?.secTitle && (
                  <h2 className="contactus-title section-ti">
                    {item.secTitle}
                  </h2>
                )}

                {item?.description && (
                  <p className="mb-4">{item.description}</p>
                )}

                {/* Dynamic contact details */}
                {item?.contactDetails?.length > 0 &&
                  item.contactDetails.map((con, idx) => (
                    <div className="contactus-item mb-3" key={idx}>
                      <h3 className="sub-ti">{con.label}:</h3>
                      <div>{con.value}</div>
                    </div>
                  ))}

                {/* Social Links */}
                {item?.socialLinks?.length > 0 && (
                  <div className="contactus-social d-flex gap-3 pt-4">
                    {item.socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`contactus-social-link contactus-social-${social.type}`}
                      >
                        {social.type ? (
                          <i className={`${social.type}`}></i>
                        ) : (
                          social?.text
                        )}
                      </a>
                    ))}
                  </div>
                )}

                {item?.button && (
                  <Link
                   
                    href={item?.button?.href}
                    className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
                    target={item?.button.target || "_blank"}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">{item?.button.text}</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Image Right */}
          {data?.content?.image?.position === "right" &&
            data?.content?.image?.src && (
              <div className="col-md-6 contactus-image mt-4 mt-md-0">
                <img
                  src={data?.content.image.src}
                  alt={data?.content.image.alt || "Contact Image"}
                  className="img-fluid rounded shadow"
                />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
