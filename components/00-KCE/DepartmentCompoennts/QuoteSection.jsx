import React from "react";

const QuoteSection = ({ data }) => {
  return (
    <section className="clubs-hero-section">
      <div className="clubs-content-wrapper">
        <div className="container">
          <div className="clubs-text-content">
            {data?.title && <h1 className="section-ti">{data?.title}</h1>}
            {data?.content &&
              data?.content?.map((item, index) => (
                <p
                  key={index}
                  className=""
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              ))}
          </div>
        </div>
      </div>

      <div className="clubs-image-section">
        {data?.img && (
          <img
            src={data?.img}
            alt="Student clubs gathering"
            className="clubs-hero-image"
          />
        )}
        {data?.quote && (
          <div className="clubs-quote-overlay">
            <div className="container">
              <blockquote className="clubs-quote">
                <span className="quote-text">{data?.quote}</span>
                <span className="quote-mark">""</span>
              </blockquote>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteSection;
