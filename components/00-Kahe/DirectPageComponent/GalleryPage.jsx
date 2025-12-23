import Link from "next/link";
import { useEffect, useState } from "react";
import "venobox/dist/venobox.min.css";

const GalleryPage = ({ content }) => {
  console.log("Content", content);

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

  const bannerCon = {
    bannerImg: "/images/Kahe/breadcrumb/banner-inner1.jpg",
    title: "Events",
  };

  return (
    <>
      <section className="section-wid gal-pg section-bg1">
        <div className="lab-container parent-gallery-container">
          {content.images.map((item, i) => (
            <Link
              className="lab-item child-gallery-single"
              key={i}
              href={item.src}
              data-gall="gallery01"
              title={item.title}
              // style={
              //   i === 4 && content.images.length > 5
              //     ? { position: "relative" }
              //     : {}
              // }
            >
              <img src={item.src} alt={item.alt} />

              {item.title && <p>{item.title}</p>}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
