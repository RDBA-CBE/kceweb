"use client";

import { useEffect } from "react";
import "venobox/dist/venobox.min.css";

const GalleryGrid = ({ data }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });
  }, []);

  return (
    <div className="kce gallery">
      {data?.title && <h2 className="section-ti">{data.title}</h2>}

      {data?.content?.map((item, index) => (
        <div className="row align-items-center py-4" key={index}>
          <div className="col-lg-12">
            {item?.title && (
              <div className="text-center mb--40">
                <h3 className="sub-ti">{item.title}</h3>
              </div>
            )}

            <ul className="brand-list brand-style-3 justify-content-center justify-content-md-start">
              {item?.images?.map((img, innerIndex) => (
                <li key={innerIndex}>
                  <a
                    href={img?.img}
                    className="child-gallery-single"
                    data-gall={`gallery-${index}`}
                    data-title={img?.title || ""}
                  >
                    <img
                      src={img?.img}
                      alt={img?.title || "Gallery Image"}
                    />
                  </a>

                  {img?.title && <p className="mt-4">{img?.title}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
