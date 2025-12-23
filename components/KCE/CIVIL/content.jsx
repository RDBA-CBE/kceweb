import React from "react";
import BuildingIcon from "@/public/images/Kahe/icons/BuildingIcon";

export default function content({ data }) {

  return (
    <div className="section-bg4" style={{ margin: "2px 0" }}>
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
