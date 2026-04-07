import React from "react";
import RichText from "./RichText";

const ImageOverlayCard = ({ data }) => {
  return (
    <section className="wyoming-right-layout">
      <div
        className="wyoming-bg-right"
        style={{
          backgroundImage: `url(${data?.bgImg})`,
        }}
      ></div>
      <div className="container-fluid">
        <div className="wyoming-right-container">
          <div className="wyoming-right-content-wrapper">
            <div className="wyoming-right-content">
              <div className="main-title-exact">
                <h4 className="section-ti">{data?.title}</h4>
              </div>
              <div className="content-wrapper">
                <p className="content-text-exact">
                  <RichText as="em" content={data.welcome} />
                </p>
                {data?.description?.map((para, index) => (
                  <RichText key={index} as="p" className="content-text-exact" content={para} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageOverlayCard;
