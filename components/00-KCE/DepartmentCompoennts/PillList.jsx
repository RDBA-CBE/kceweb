import Link from 'next/link';
import React from 'react';

const PillList = ({ data }) => {
  return (
    <section className='scr-section'>
      <div className='scr-container'>
        {/* Heading */}
        <div className='scr-header'>
          {data?.title && <h2 className='section-ti'>{data?.title}</h2>}

          {data?.description && <p className=''>{data?.description}</p>}
        </div>

        {/* List */}
        <div className="scr-list">
          {data?.items.map((item) =>
            item?.url ? (
              <Link href={item?.url || "#"} target={item?.target || "_blank"}>
                <div className="scr-card" key={item.id}>
                  <span className="scr-card-text">
                    {item?.bullet && <span className="dcl-bullet">✓</span>}
                    {item.label}
                  </span>
                  <span className="scr-card-arrow">→</span>
                </div>
              </Link>
            ) : (
              <div className="scr-card" key={item.id}>
                <span className="scr-card-text">
                  {item?.bullet && <span className="dcl-bullet">✓</span>}
                  {item.label}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PillList;
