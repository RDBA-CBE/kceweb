"use client";

const LinkCard = ({ data }) => {
  return (
    <section className={`${data?.sectionbg || "section-bg1"}`}>
      <div className="eres-wrap section-wid">
        <div className="">
          {data.title && (
            <h2 className="eres-title text-center  section-ti">{data.title}</h2>
          )}

          <div className="row g-5 pt-4">
            {data.content.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="eres-card h-100">
                  <p className="eres-card-title sub-ti">{item.title}</p>

                  <a
                    href={item.url}
                    target="_blank"
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
