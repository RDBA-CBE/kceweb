import BooksIcon from "@/public/images/Kahe/icons/BooksIcon";
import BuildingIcon from "@/public/images/Kahe/icons/BuildingIcon";
import LabIcon from "@/public/images/Kahe/icons/LabIcon";
import StudentsIcon from "@/public/images/Kahe/icons/StudentsIcon";
import { FirstLetterUp } from "@/utils/functions.utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Infrastructure = ({ infrastructureContent }) => {
  console.log("facultyContent", infrastructureContent);

  const [toggle, setToggle] = useState(false);

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

  const infraCon = infrastructureContent.items?.find(
    (item) => item.type == "infrastructure"
  );

  const labItem = infrastructureContent.items?.find(
    (item) => item.type == "laboratories"
  );
  const equipementItem = infrastructureContent.items?.find(
    (item) => item.type == "equipment"
  );

  const library = infrastructureContent.items?.find(
    (item) => item.type == "library"
  );

  const gallery = infrastructureContent.items?.find(
    (item) => item.type == "gallery"
  );

  const visibleFaculty = toggle
    ? equipementItem?.content
    : equipementItem?.content.slice(0, 8);

  return (
    <div className={`section-wid rbt-dashboard-content infra `}>
      <div className="content has-show-more-inner-content">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2
                className="decor-ti"
                dangerouslySetInnerHTML={{
                  __html: FirstLetterUp(infrastructureContent.tab),
                }}
              ></h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-12">
            {infraCon && (
              <div className="row mb--30">
                {infraCon.title && (
                  <h3
                    className="main-sub-ti"
                    dangerouslySetInnerHTML={{
                      __html: FirstLetterUp(infraCon.title),
                    }}
                  ></h3>
                )}

                <div className="simple-counter-grid">
                  {infraCon?.content?.map((item, i) => (
                    <div key={i} className="simple-counter-card">
                      <p className="simple-counter-number">{item?.count}</p>
                      <div>
                        <StudentsIcon className="dept-icon" />
                        <p className="simple-counter-title">{item?.title}</p>
                      
                      </div>
                      
                    </div>
                  ))}
                </div>

                {/* <div className=" mt-0">
                  {infraCon?.content?.map((item, i) => (
                    <div key={i} className="">
                      <div className="">
                        <p className="">{item?.count}</p>
                        <p className="">{item?.title}</p>
                        <StudentsIcon className="dept-icon" />
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            )}

            {labItem && (
              <div className="lab row g-5 mb--30 mt-5">
                <h3
                  className="main-sub-ti"
                  dangerouslySetInnerHTML={{
                    __html: FirstLetterUp(labItem.title),
                  }}
                ></h3>

                {/* <div className="col-lg-12 mt-0">
                  <ul className="rbt-list-style-1">
                    {labItem.content.map((item, i) => (
                      <li key={i}>
                        <i className="feather-check"></i>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                <div className="dept-wrapper mt-0 ">
                  {labItem?.content?.map((item, i) => (
                    <div key={i} className="dept-card bg-lblue-1">
                      <div className="dept-inner">
                        <BuildingIcon className="dept-icon" color={"#fff"} />
                        <p className="dept-title">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {equipementItem && (
              <div className="equip rbt-dashboard-table table-responsive mb--30 pt-5">
                <h3
                  className="main-sub-ti"
                  dangerouslySetInnerHTML={{
                    __html: FirstLetterUp(equipementItem?.title),
                  }}
                ></h3>

                <div className="dept-wrapper">
                  {equipementItem?.content?.map((item, i) => (
                    <div
                      key={i}
                      className="dept-card bg-white"
                      style={{
                        "--bgImg": `url(/images/Kahe/Innerpages/infra-1.jpg)`,
                      }}
                    >
                      <div className="dept-inner">
                        <p className="dept-title">{item}</p>
                        <LabIcon className="dept-icon" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {library && (
              <div className="lib row mb--30 pt-5">
                {library.title && (
                  <h3
                    className="main-sub-ti"
                    dangerouslySetInnerHTML={{
                      __html: FirstLetterUp(library.title),
                    }}
                  ></h3>
                )}

                <div className="dept-wrapper mt-0">
                  {library?.content?.map((item, i) => (
                    <div key={i} className="dept-card bg-lblue-1">
                      <div className="dept-inner">
                        <BooksIcon className="dept-icon" color={"#fff"} />
                        <p className="dept-title">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* {gallery && (
              <div className="lab-container parent-gallery-container">
                {gallery.images.slice(0, 5).map((item, i) => (
                  <Link
                    className="lab-item child-gallery-single"
                    key={i}
                    href={item.src}
                    data-gall="gallery01"
                    title={item.title}
                    style={
                      i === 4 && gallery.images.length > 5
                        ? { position: "relative" }
                        : {}
                    }
                  >
                    <img src={item.src} alt={item.alt} />
                    {i === 4 && gallery.images.length > 5 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "rgba(0,0,0,0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        +{gallery.images.length - 5} More Images
                      </div>
                    )}
                    {item.title && <p>{item.title}</p>}
                  </Link>
                ))}

                {gallery.images.slice(5).map((item, i) => (
                  <Link
                    className="lab-item child-gallery-single"
                    key={i + 10}
                    href={item.src}
                    data-gall="gallery01"
                    title={item.title}
                    style={{ display: "none" }}
                  >
                    <img src={item.src} alt={item.alt} />
                  </Link>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* <div
        className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Show Less" : "Show More"}
      </div> */}
    </div>
  );
};

export default Infrastructure;
