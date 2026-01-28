"use client";

import Link from "next/link";

const RectangleList = ({ data }) => {
  return (
    <section className={data?.sectionbg || "section-bg1"}>
      <div className="ps-section section-wid">
        <div className="">
          <div className="row g-5">
            {data?.content?.map((item, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                {item.url ? (
                  <Link href={item.url} className="ps-card">
                    <span className="ps-title">{item.title}</span>
                    <span className="ps-arrow">
                      {" "}
                      <i className="feather-chevrons-right"></i>
                    </span>
                  </Link>
                ) : (
                  <div className="ps-card">
                    <span className="ps-title">{item.title}</span>
                    <span className="ps-arrow">
                      {" "}
                      <i className="feather-chevrons-right"></i>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RectangleList;
