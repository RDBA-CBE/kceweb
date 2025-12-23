import React from "react";
import BreadcrumbImage from "../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";
import Link from "next/link";

const InnerSubBanner = ({ data }) => {
  return (
    <div className="uw-banner-container innerSubBanner">
      <div
        className="uw-banner-background"
        style={{
          backgroundImage: `url(${data?.bannerImg})`,
          backgroundPosition: "top",
        }}
      ></div>
      <div className="uw-banner-overlay">
        <div className="uw-banner-content">
          <div className="uw-banner-header">
            <h2
              className="banner-ti"
              dangerouslySetInnerHTML={{ __html: data?.title }}
            ></h2>
          </div>

          {data?.bannerCon && (
            <div className="uw-banner-text">
              <p
                className="banner-p"
                dangerouslySetInnerHTML={{ __html: data?.bannerCon }}
              ></p>
            </div>
          )}

          {data?.applyLink && (
            <div className="">
              {/* <button className="kahe-btn kahe-btn-secondary">Apply Today</button> */}
              <button className="rbt-btn hover-icon-reverse" href="#">
                <Link href={data?.applyLink}>
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Apply Now</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerSubBanner;
