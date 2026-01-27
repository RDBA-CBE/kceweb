import Image from "next/image";
import React from "react";

export default function ContentCounterStyle({ data }) {
  if (!data?.content?.length) return null;

  return (
    <div className="col-lg-12 kce">
      {data.content.map((card, index) => (
        <div className="modern-course-features-box h-100" key={index}>
          <div className="inner">
            <div className="thumbnail">
              <Image src={card.img} width={604} height={408} alt={card.title} />
            </div>

            <div className="">
              <h2 className="section-ti mt--10">{card.title}</h2>
              <h3 className="sub-ti mt--10">{card.subtitle}</h3>
              <p>{card.desc}</p>

              <ul className="course-feature-list mt-4">
                {card.counterList?.map((item, i) => (
                  <li key={i}>
                    <div className="icon">
                      <Image
                        src={item.icon}
                        width={40}
                        height={40}
                        alt={item.text}
                      />
                    </div>
                    <div className="feature-content">
                      <h4 className="featute-title">
                        {item.num} <span>{item.text}</span>
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>

              {card.pointList &&
                card.pointList?.map((item, index) => (
                  <div key={index}>
                    <h3 className="sub-ti mt-5">{item.title}</h3>

                    <ul key={index} className="vm-list mb-4 mt-3">
                      {item.list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>

                   
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
