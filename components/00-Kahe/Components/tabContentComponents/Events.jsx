import { FirstLetterUp } from "@/utils/functions.utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Events = ({ eventsContent }) => {
  const router = useRouter();
  const goToEvents = () => {
    sessionStorage.setItem('eventsData', JSON.stringify(eventsContent));
    router.push(`/kahe/events/${eventsContent.slug}`);
  };

  return (
    <>
      <div className="section-wid rbt-course-feature-inner">
        <div className="section-title">
          <h4 className="decor-ti">{FirstLetterUp(eventsContent.tab)}</h4>
        </div>

        <div className="row g-5">
          {eventsContent.items.map((item, i) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              key={i}
              onClick={goToEvents} // 👈 On click push to /events
              style={{ cursor: "pointer" }} // 👈 To indicate clickable
            >
              <div className="rbt-cat-box rbt-cat-box-1 image-overlaping-content on-hover-content-visible">
                <div className="inner">
                  <div className="thumbnail">
                    <Image
                      src="/images/Kahe/Innerpages/infra-1.jpg"
                      width={300}
                      height={300}
                      priority
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title">{item.title}</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        View events <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="rbt-accordion-style rbt-accordion-02 accordion">
          <div className="accordion" id="accordionExampleb2">
            {eventsContent.items.map((item, i) => (
              <div className="accordion-item card" key={i}>
                <h2
                  className="accordion-header card-header"
                  id={`headingTwo${i}`}
                >
                  <button
                    className={`accordion-button ${
                      !item.collapsed ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${i + 1}`}
                    aria-expanded={item.expand}
                    aria-controls={`collapseTwo${i + 1}`}
                  >
                    {item.title}
                   
                  </button>
                </h2>
                <div
                  id={`collapseTwo${i + 1}`}
                  className={`accordion-collapse collapse ${
                    item.isShow ? "show" : ""
                  }`}
                  aria-labelledby={`headingTwo${i}`}
                  data-bs-parent="#accordionExampleb2"
                >
                  <div className="accordion-body card-body pr--0">
                    <ul className="rbt-course-main-content liststyle">
                      {item.content.map((list, subIndex) => (
                        <li key={subIndex}>
                          <Link href="/lesson">
                            <div className="course-content-left">
                              <i className="feather-file-text"></i>

                              <span className="text">{list}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Events;
