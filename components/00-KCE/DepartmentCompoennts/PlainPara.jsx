import React from "react";

const PlainPara = ({ data }) => {
  return (
    <div className="section-wid">
      {data?.title && <h2 className="section-ti">{data?.title}</h2>}
      {data.content.map((item, index) => (
        <div key={index} className="plain-para">
          <div className="">
            <div className="remaining-content">{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlainPara;
