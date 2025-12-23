import React from "react";
import BuildingIcon from "@/public/images/Kahe/icons/BuildingIcon";

export default function LabFacility({ data }) {
  const datas = [
    "Strength of Materials Laboratory",
    "Fluid Mechanics Laboratory",
    "Construction Materials Laboratory",
    "Concrete and Highway Laboratory",
    "Soil Mechanics Laboratory",
    "Survey Laboratory",
    "Environmental Engineering Laboratory",
    "Computer Aided Design and Drafting Laboratory",
  ];
  return (
    // <div className="section-bg4" style={{ margin: "2px 0" }}>
    //   {data?.map((item) => (
    //     <div className="section-bg2" style={{}}>
    //       <div className="section-wid">
    //         <div className="remaining-content">{item}</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="  row g-5 mb--30 mt-5">
      <h3
        className="main-sub-ti "
        dangerouslySetInnerHTML={{
          __html: "Lab Facilities ",
        }}
      ></h3>

      <div className="dept-wrapper mt-0 ">
        {datas?.map((item, i) => (
          <div key={i} className="dept-card bg-lblue-1">
            <div className="dept-inner">
              <BuildingIcon className="dept-icon" color={"#fff"} />
              <p className="dept-title">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
