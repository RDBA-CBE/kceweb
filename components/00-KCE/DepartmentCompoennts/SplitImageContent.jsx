"use client";

import Image from "next/image";


const SplitImageContent = ({ data }) => {
  return (
    <section className="ci-section">
      <div className="ci-container">

        <div className="ci-layout">

          {/* TEXT CONTENT */}
          <div className="ci-content">
            <h2 className="ci-title">{data.sectionTitle}</h2>
            <h3 className="ci-heading">{data.name}</h3>
            <p className="ci-subheading">{data.designation}</p>

            {data.content.map((text, index) => (
              <p key={index} className="ci-text">
                {text}
              </p>
            ))}
          </div>

          {/* IMAGE */}
          <div className="ci-media">
            <Image
              src={data.image}
              alt={data.name}
              width={320}
              height={420}
              className="ci-image"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default SplitImageContent;
