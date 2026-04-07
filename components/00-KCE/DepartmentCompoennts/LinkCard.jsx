"use client";
import RichText from "./RichText";

const LinkCard = ({ data }) => {
  return (
    <section className={`${data?.sectionbg || "section-bg1"}`}>
      <div className="eres-wrap section-wid">
        <div className="">
          {data.title && (
            <h2 className="eres-title text-center  section-ti">{data.title}</h2>
          )}

          <div className="row g-5 pt-4">
            {data.content?.map((item,i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="eres-card h-100">
                  <RichText as="p" className="eres-card-title sub-ti" content={item.title} />

                  {item?.desc && (
                    <RichText as="p" className="eres-card-desc" content={item.desc} />
                  )}

                  <a
                    href={item.url}
                    target={item?.target || "_blank"}
                    rel="noopener noreferrer"
                    className="eres-card-footer"
                  >
                    <span className="eres-link">{item?.urlText}</span>
                    <span className="eres-arrow">
                      {item.src ? (
                        <img src={item.src} alt="icon" />
                      ) : (
                        <i className="feather-arrow-up-right" />
                      )}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkCard;
