import React from "react";
import { FiZap, FiSunrise, FiStar } from "react-icons/fi";

const QuoteBox = ({ data }) => {
  return (
    <section className="qm-section bg-lgreen">
      <div className="qm-container">

        {/* QUALITY POLICY */}
        <div className="qm-box qm-left">
          <h2 className="qm-title">{data.qualityPolicyTitle}</h2>
          <p className="qm-text">{data.qualityPolicyText}</p>
        </div>

        {/* MOTTO */}
        <div className="qm-box qm-right">
          <h2 className="qm-title">{data.mottoTitle}</h2>

          <div className="qm-motto-icons">
            {data.motto.map((item, index) => (
              <React.Fragment key={index}>
                <div className="qm-motto-item">
                  {item.icon === "zap" && <FiZap className="qm-motto-icon" />}
                  {item.icon === "sunrise" && <FiSunrise className="qm-motto-icon" />}
                  {item.icon === "star" && <FiStar className="qm-motto-icon" />}
                  <span>{item.label}</span>
                </div>

                {index !== data.motto.length - 1 && (
                  <div className="qm-divider">|</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuoteBox;
