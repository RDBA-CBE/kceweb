"use client";

const LinkCard = ({ data }) => {
  return (
    <section className="eres-wrap section-wid">
      <div className="">
        {data.title && <h2 className="eres-title text-center  section-ti">
          {data.title}
        </h2>}

        <div className="row g-4">
          {data.content.map((item) => (
            <div
              className="col-lg-4 col-md-6"
              key={item.id}
            >
              <div className="eres-card h-100">
                <p className="eres-card-title sub-ti">
                  {item.title}
                </p>

                <div className="eres-card-footer">
                  <span className="eres-link">
                    {item.url}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eres-arrow"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkCard;
