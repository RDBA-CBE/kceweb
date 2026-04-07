import React from "react";
import RichText from "./RichText";

const CardList3 = ({ data }) => {
  return (
    <div className="">
      <div className="pso-split-wrapper">
        <h2 className="section-ti">{data.title}</h2>
        {data?.content?.map((pso, index) => (
          <div key={index} className="pso-split-row">
            <div className="pso-strip">
              <span>{pso.code}</span>
            </div>
            <div className="pso-text">
              <RichText as="p" content={pso.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList3;
