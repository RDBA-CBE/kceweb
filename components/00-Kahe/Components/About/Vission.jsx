import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const Vision = ({ vision }) => {
  return (
    <section className="vsn-section">
      <div className="vsn-container">
        <div className="vsn-right">
          <img
            src={vision.src}
            alt={vision.alt}
            className="vsn-image"
          />
        </div>

        <div className="vsn-left">
          <h2
            className="decor-ti"
            dangerouslySetInnerHTML={{ __html: FirstLetterUp(vision?.title)}}
          >
          </h2>
          <p
            className="vsn-desc"
            dangerouslySetInnerHTML={{ __html: vision.description }}
          ></p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
