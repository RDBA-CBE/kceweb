"use client";

const RectangleList = ({ data }) => {
  return (
    <section className="ps-section">
      <div className="container">
        <div className="row g-3">
          {data?.content?.map((item, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
              <a href={item.url} className="ps-card">
                <span className="ps-title">{item.title}</span>
                <span className="ps-arrow"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RectangleList;
