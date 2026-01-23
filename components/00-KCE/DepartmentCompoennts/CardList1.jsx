import React from "react";

const CardList1 = ({ data }) => {
  return (
    <div className="  peo-section">
      <div className="row">
        <div className="col-lg-12 mb-4 mb-lg-0">
          <h2 className="section-ti">{data.title}</h2>
          <ul className="peo-list improved">
            {data?.content?.map((peo, index) => (
              <li key={index}>
                <div className="peo-badge">{peo.code}</div>
                <p>{peo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardList1;
