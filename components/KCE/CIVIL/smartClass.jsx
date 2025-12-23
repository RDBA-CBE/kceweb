"use client";
import BooksIcon from "@/public/images/Kahe/icons/BooksIcon";
import React from "react";

export default function SmartClass({data}) {
  return (
    <div className="lib row mb--30 pt-5">
      <h3
        className="main-sub-ti"
        dangerouslySetInnerHTML={{
          __html: "Smart Class Rooms",
        }}
      ></h3>

      <div className="dept-wrapper mt-0">
        {data?.Smart_Class_Rooms?.map((item, i) => (
          <div key={i} className="dept-card bg-lblue-1">
            <div className="dept-inner">
              <BooksIcon className="dept-icon" color={"#fff"} />
              <p className="dept-title">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
