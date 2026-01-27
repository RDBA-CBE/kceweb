import React from "react";

const ContentCard = () => {
  return (
    <section className="kisd-modern">
      <div className="container">
        {/* HEADER */}
        <div className="kisd-header text-center">
          <span className="badge">{data?.header?.badge}</span>
          <h2>{data?.header?.title}</h2>
          <p>{data?.header?.description}</p>
        </div>

        {/* HIGHLIGHTS */}
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
    </section>
  );
};

export default ContentCard;
