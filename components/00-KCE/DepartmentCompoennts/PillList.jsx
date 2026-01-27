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
        {data?.sections?.map((section) => (
          <div key={section.subtitle}>
            <h3 className='sub-ti my-5'>{section.subtitle}</h3>

            <div className='scr-list'>
              {section?.items?.map((item) => (
                <Link key={item.id} href={item.url} target='_blank'>
                  <div className='scr-card'>
                    <span className='scr-card-text'>{item.label}</span>
                    <span className='scr-card-arrow'>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillList;
