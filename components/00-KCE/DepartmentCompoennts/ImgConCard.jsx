import Link from "next/link";
import React from "react";

const ImgConCard = ({ data }) => {
  return (
    <div className="">
      <div className="row align-items-stretch gx-5">
        {data?.content.map((item, index) => (
          <div key={index} className="col-12 col-xl-6 d-flex">
            <div className={` coe-panel d-flex flex-column w-100`}>
              <div className="row align-items-center h-100">
                <div className="col-lg-8 content">
                  <h3 className="section-ti mt-1">{item?.title}</h3>

                  {item.subtitle && (
                    <span className="sub-ti">{item?.subtitle}</span>
                  )}

                  <p>{item?.text}</p>

                  {item?.points && (
                    <ul className="vm-list mb-4 mt-5">
                      {item?.points.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}

                  {item?.url && (
                    <p>
                      <Link
                        href={item?.url}
                        class="read-more-btn"
                        target="_blank"
                      >
                        <span class="rbt-btn-link">
                          {item?.urlText}
                          <i class="feather-arrow-up-right"></i>
                        </span>
                      </Link>
                    </p>
                  )}
                </div>

                <div className="col-lg-4">
                  <div className="logo-glass">
                    <img src={item?.logo} alt={item?.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <section className="kisd-modern">
        <div className="container">
          
          <div className="kisd-header text-center">
            <span className="badge">{data?.header?.badge}</span>
            <h2>{data?.header?.title}</h2>
            <p>{data?.header?.description}</p>
          </div>

          
          <div className="row g-4 mt-5">
            {data?.highlights.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ImgConCard;
