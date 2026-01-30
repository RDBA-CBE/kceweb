import React from "react";
import Link from "next/link";
import Image from "next/image";

const BottomPlacement = () => {
  return (
    <div className="rbt-call-to-action-area section-bg1 bg-blue">
      <section className="section-wid">
        <div className="row g-5 align-items-center content-wrapper">
          <div className="col-xxl-3 col-xl-3 col-lg-6">
            <div className="inner">
              <div className="content text-start">
                <h2 className="section-ti text-white mb--0" >Placement Offers</h2>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            {/* <div className="inner-content text-start">
              <p className="color-white">{data.desc}</p>
            </div> */}
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6">
            <div className="call-to-btn text-start text-xl-end">
              <Link
                href="/KCE/recruiters-list"
                className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
                target="_self"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Know More</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottomPlacement;
