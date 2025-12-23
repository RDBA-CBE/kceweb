import { FirstLetterUp } from "@/utils/functions.utils";
import React from "react";

const ImageCard = ({ visionItem, missionItem }) => {
  return (
    <section className="vm-section ">
      <div className="vm-container">
        {/* VISION */}
        {visionItem && (
          <div className="vm-card vision">
            <div className="vm-icon">
              <img src={visionItem.src} alt={visionItem.subTitle} />
            </div>
            <h3
              className="main-ti vision-title"
              dangerouslySetInnerHTML={{
                __html: FirstLetterUp(visionItem.subTitle),
              }}
            ></h3>

            <ul className="rbt-list-style-1">
              {visionItem.content.map((v, i) => (
                <li key={i}>
                  <i className="feather-check"></i>
                  <span
                    className="text-start"
                    dangerouslySetInnerHTML={{ __html: v }}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* MISSION */}
        {missionItem && (
          <div className="vm-card mission">
            <div className="vm-icon">
              <img src={missionItem.src} alt={missionItem.subTitle} />
            </div>
            <h3
              className="main-ti mission-title"
              dangerouslySetInnerHTML={{
                __html: FirstLetterUp(missionItem.subTitle),
              }}
            ></h3>
            <ul className="rbt-list-style-1">
              {missionItem.content.map((v, i) => (
                <li key={i}>
                  <i className="feather-check"></i>
                  <span
                    className="text-start"
                    dangerouslySetInnerHTML={{ __html: v }}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageCard;
