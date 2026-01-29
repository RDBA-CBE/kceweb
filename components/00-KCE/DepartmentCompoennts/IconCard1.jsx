import React from "react";

const IconCard1 = ({ data }) => {
  console.log("data", data);

  return (
    <section className={`${data?.sectionbg || "section-bg1"}`}>
      <div className="kisd-modern section-wid">
        <div className="kisd-header ">
          {data?.badge && <span className="ti-badge">{data?.badge}</span>}
          {data?.title && <h2 className="section-ti">{data?.title}</h2>}
          {data?.subTi && <h2 className="sub-ti">{data?.subTi}</h2>}
          {data?.desc && <p>{data?.desc}</p>}
        </div>

        <div className="row g-5 mt-5">
          {data?.content?.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="kisd-card">
                {item?.src && <img className="pb-4" src="/images/kce/vision.png" alt="" />}
                {item?.title && <h5 className="sub-ti">{item.title}</h5>}

                {item.text && <p>{item.text}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconCard1;
