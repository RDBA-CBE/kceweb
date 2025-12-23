import React from "react";

export default function content({ data }) {

  return (
    <div className="section-bg4" >
      {data?.map((item) => (
        <div className="section-bg2" style={{}}>
          <div className="section-wid">
            <div className="remaining-content">{item}</div>
          </div>
        </div>
      ))}
    </div>

   
  );
}
