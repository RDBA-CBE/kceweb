import { FlaskConical } from "lucide-react";
import React from "react";

const IconCard = ({data}) => {
  return (
    <section className="lab-section  py-5">
      <h2 className="section-ti mb-4">{data?.title}</h2>
      <div className="row g-5 mt-5">
        {data?.content.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <div className="lab-card">
              <div className="lab-icon">
                <img src={item?.img} alt="" />
              </div>
              <p className="">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconCard;
