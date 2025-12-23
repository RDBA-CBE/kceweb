import Image from "next/image";
import React from "react";


const AboutBanner = () => {
  return (
    <section className="visionBanner-container">
      <div className="visionBanner-overlay">
        <div className="visionBanner-content">
          <h2 className="visionBanner-title">
            ENABLE | ENLIGHTEN | ENRICH
          </h2>
          <p className="visionBanner-subtitle">
            Leading the way to a brighter future.
          </p>

          <h3 className="visionBanner-sectionTitle">VISION</h3>

          <div className="visionBanner-box">
            <p className="visionBanner-text">
              To impart value based quality education, to undertake scientific, 
              socially relevant research and instill creativity among the learners, 
              to enable, enlighten and enrich them to serve and lead the society.
            </p>
          </div>
        </div>

        {/* Background image */}
        <div className="visionBanner-image">
          <Image
            src="/images/Kahe/innerbanner.jpg"
            alt="Vision Banner"
            fill
            priority
            className="visionBanner-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
