import React from "react";
import Link from "next/link";
import Image from "next/image";

const BottomPlacement = () => {
  return (
    <div className="rbt-call-to-action-area section-bg1 bg-blue">
      <section className="section-wid">
        <div className="row gx-5 align-items-center content-wrapper">
          <div className="col-xl-5 col-lg-7">
            <div className="inner">
              <div className="content text-start">
                <h2 className="section-ti text-white mb--0" >Placement Offers</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2 d-none d-lg-block">
            {/* <div className="inner-content text-start">
              <p className="color-white">{data.desc}</p>
            </div> */}
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="call-to-btn text-start text-lg-end">
              <Link
                href="/placement-overview"
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
