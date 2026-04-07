import React from "react";
import RichText from "./RichText";

const CardList2 = ({ data }) => {
  return (
    <div className=" ">
      <div className="po-accent-wrapper">
       {data.title && <h2 className="section-ti">{data.title}</h2>}
        {data?.desc && <RichText as="p" content={data.desc} />}
        {data?.content?.map((item, index) => (
          <div key={index} className="po-accent-card">
           {item.code && <div className="po-badge">{item.code}</div>}
            <div className="po-content">
              <h3 className="sub-ti">{item.title}</h3>
              <RichText as="p" content={item.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList2;
