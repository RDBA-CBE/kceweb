"use client";

const TimeLine = ({ data }) => {
  return (
    <section className={data?.sectionbg || "section-bg1"}>
      <div className="mom-section section-wid">
        <div className="">
          {data?.title && <h2 className="section-ti">{data?.title}</h2>}
          {data?.subTitle && <h2 className="sub-ti">{data?.subTitle}</h2>}

          <div className="row g-5 pt-3">
            {data?.content.map((item, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                <div className="mom-card">
                  <div className="mom-card-inner">
                    {/* Year Circle */}
                    <div className="mom-year">{item?.year}</div>

                    {/* Timeline */}
                    <div className="mom-timeline">
                      <span className="mom-vertical-line"></span>

                      {item.dates.map((date, i) => (
                        <div className="mom-timeline-row" key={i}>
                          <span className="mom-horizontal-line"></span>
                          <span className="mom-arrow"></span>

                          <a
                            href={date.url}
                            className="mom-date"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {date.text}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
