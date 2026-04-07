import React from "react";
import RichText from "./RichText";

const PlainPara = ({ data }) => {
  return (
    <div className="section-wid">
      {data?.title && <h2 className="section-ti">{data?.title}</h2>}
      {data.content.map((item, index) => (
        <div key={index} className="plain-para">
          <div className="">
            <RichText as="div" className="remaining-content" content={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlainPara;
