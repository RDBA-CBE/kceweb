import Link from "next/link";
import React from "react";
import RichText from "./RichText";

const ImgConCard = ({ data }) => {
  return (
    <div className="">
      <div className="row align-items-stretch gx-5">
        {data?.content.map((item, index) => (
          <div key={index} className={`${data?.twoCol == false ? 'col-12 ' : 'col-12 col-xl-6'} d-flex`}>
            <div className={` coe-panel d-flex flex-column w-100`}>
              <div className="row align-items-center h-100">
                <div className={`${item?.logo ? 'col-lg-8' : 'col-12'} content`}>
                  <h3 className="section-ti mt-1">{item?.title}</h3>

                  {item.subtitle && (
                    <span className="sub-ti">{item?.subtitle}</span>
                  )}

                  <RichText as="p" content={item?.text} />

                  {item?.points && (
                    <ul className="vm-list mb-4 mt-5">
                      {item?.points.map((li, i) => (
                        <RichText key={i} as="li" content={li} />
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

                {item?.logo && <div className="col-lg-4">
                  <div className="logo-glass">
                    <img src={item?.logo} alt={item?.title} />
                  </div>
                </div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ImgConCard;
