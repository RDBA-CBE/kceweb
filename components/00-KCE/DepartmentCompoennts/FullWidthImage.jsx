"use client";

const FullWidthImage = ({ data }) => {
  return (
    <section className={data?.sectionbg || "section-bg1"}>
      <div className="section-wid">
        {data?.title && <h2 className="section-ti">{data?.title}</h2>}
        <div
          className="fullwidth-image-inner"
          style={{ height: `${data?.height || "auto"} ` }}
        >
          <img
            src={data?.src}
            alt={data?.alt}
            fill
            priority
            className="fullwidth-image"
          />
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;
