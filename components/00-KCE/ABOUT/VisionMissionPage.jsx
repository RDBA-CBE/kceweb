'use client';

import SideMenu from '@/components/00-KCE/ABOUT/sideMenu';
import InnerBanner from '@/components/00-KCE/common/InnerBanner';
import React from 'react';
import RichText from '../DepartmentCompoennts/RichText';
import sideBarData from '@/JSON/sidebar.json';
import data from '@/JSON/ABOUT/vissionMision.json';
import IconCard1 from '../DepartmentCompoennts/IconCard1';

const VisionMissionPage = () => {
  const { banner, content, sideMenu } = data;

  return (
    <section className='about-wrapper'>
      <InnerBanner data={banner} />

      <div className='section-wid section-bg1'>
        <div className='row'>
          {/* LEFT CONTENT */}
          <div className='col-lg-9 about-content-area'>
            {/* VISION */}
            <div className='vm-card fade-up'>
              <span className='ti-badge'>{content.vision.badge}</span>
              <h2 className='section-ti'>{content.vision.title}</h2>
              <RichText as="p" className='vm-text' content={content.vision.text} />
            </div>

            {/* MISSION */}
            <div className='vm-card fade-up delay-1 mb-0'>
              <span className='ti-badge'>{content.mission.badge}</span>
              <h2 className='section-ti'>{content.mission.title}</h2>

              <ul className='vm-list'>
                {content.mission.points.map((item, i) => (
                  <li key={i}><RichText content={item} /></li>
                ))}
              </ul>
            </div>

            {/* <IconCard1 data={content.iconCard?.data} /> */}

            <div className='kisd-modern mt-5'>
              <div className='kisd-header pt-5'>
                
                {content.iconCard?.data?.title && (
                  <h2 className='section-ti '>
                    {content.iconCard?.data?.title}
                  </h2>
                )}
                
                {data?.desc && <p>{content.iconCard?.data?.desc}</p>}
              </div>

              <div className='row g-5 mt-5'>
                {content.iconCard?.data?.content?.map((item, index) => (
                  <div key={index} className='col-md-6'>
                    <div className='kisd-card'>
                      {item?.src && (
                        <img
                          className='pb-4'
                          src='/images/kce/vision.png'
                          alt=''
                        />
                      )}
                      {item?.title && <h5 className='sub-ti'>{item.title}</h5>}

                      {item.text && <RichText as="p" content={item.text} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu data={sideBarData?.profile} />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPage;
