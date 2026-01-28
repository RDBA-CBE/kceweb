"use client";

const TimeLine = ({ data }) => {
  return (
    <section className="mom-section">
      <div className="container">
        <div className="mom-header">{data?.title}</div>

        <div className="row g-4">
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
                        <span className="mom-date">{date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
