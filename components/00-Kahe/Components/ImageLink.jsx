"use client";

import { FirstLetterUp, splitChar, splitFirstAndRemaining } from "@/utils/functions.utils";

const ImageLink = ({ data }) => {
  return (
    <div className="commitee">
      <div className="decor-ti">{FirstLetterUp(data?.title)}</div>
      <div className="row py-5">
        {data?.content?.map((item, index) => {
          const { firstPart, remaining } = splitFirstAndRemaining(item.content, 700);

          return (
            <div className="imageLink-sec" key={index}>
              <div className="imageLink-item1">
                {item.title && <h2 className="main-sub-ti">{item.title}</h2>}

                {/* First part */}
                <p>{splitChar(firstPart, 700)}</p>

                

                {item?.url && (
                  <a href={item.url} className="read-more-btn">
                    <span className="rbt-btn-link">
                      For More Information
                      <i className="feather-arrow-up-right"></i>
                    </span>
                  </a>
                )}
              </div>
              <div className="imageLink-item2">
                {item?.src && <img src={item.src} alt={item.title || ""} />}
              </div>

              {/* Remaining part */}
                {remaining && <p className="mt-2">{splitChar(remaining, 700)}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageLink;
