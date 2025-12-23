
import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const CoreValues = ({values, title}) => {
  return (
    <section className="cv-wrapper">
      <h2 className="w-decor-ti">{FirstLetterUp(title)}</h2>

      <div className="cv-items-wrapper">
        {values.map((val, i) => (
          <div className="cv-item" key={i}>
            <div className="cv-circle" style={{ backgroundColor: val.color }}>
              <span className="cv-icon">{val.icon}</span>
            </div>

            <h3 className="main-sub-ti">{FirstLetterUp(val.title)}</h3>

            <p>{val.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
