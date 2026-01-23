import React from "react";

const CardList2 = ({ data }) => {
  return (
    <div className=" ">
      <div className="po-accent-wrapper">
        <h2 className="section-ti">{data.title}</h2>
        {data?.content?.map((item, index) => (
          <div key={index} className="po-accent-card">
            <div className="po-badge">{item.code}</div>
            <div className="po-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList2;
