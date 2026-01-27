import React from "react";

const HalfCardImage = ({ data }) => {
  return (
    <div className="container HalfCardImage">
      <div className=" py-5">
        {data?.content?.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`row align-items-center vision-section mb-5 ${
                isReverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-lg-7 position-relative">
                <img
                  src={item.image}
                  className="img-fluid main-image"
                  alt={item.title}
                />
                

                {/* Floating card */}
                <div
                  className={`floating-card ${
                    isReverse ? "card-left" : "card-right"
                  }`}
                >
                  <h4 className="section-ti">{item.title}</h4>
                  {item.description && <p>{item.description}</p>}

                  {item?.list?.map((liItem, index) => (
                    <div key={index}>
                      {liItem?.title && <h3 className="sub-ti">{liItem.title}</h3>}

                      {Array.isArray(liItem?.item) && (
                        <ul className="vm-list">
                          {liItem.item.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HalfCardImage;
