'use client'

import Link from 'next/link'
import React from 'react'
import RichText from './RichText'

const ImageOverlayContent = ({ data }) => {
  return (
    <section
      className='ioc-wrapper '
      style={{ backgroundImage: `url(${data?.bgImage})` }}
    >
      <div className='ioc-overlay'>
        <div className='ioc-container section-wid'>
          <div className='ioc-row'>
            {/* Left Column */}
            <div className='ioc-left-col'>
              <h2 className='section-ti text-white mb-0 mt-5'>{data?.title}</h2>
              {data?.title2 && (
                <h2 className='sub-ti text-white mb-0 mt-5'>{data?.title2}</h2>
              )}
              {data?.subtitle && <RichText as="p" className="mt-4" content={data?.subtitle} />}
              {data?.button && (
                <div>
                  <Link
                    href={data?.button?.url || '#'}
                    target='_blank'
                    className='px-5 py-3 mt-3 d-inline-block text-decoration-none'
                    style={{
                      backgroundColor: '#f2fff9',
                      color: '#1C3C4A',
                      borderRadius: '20px'
                    }}
                  >
                    <span className='faculty-ti'>{data?.button?.name}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className='ioc-right-col'>
               {data?.rightTi && <RichText as="p" className="sub-ti" content={data?.rightTi} />}
               {data?.desc && <RichText as="p" className="mt-4" content={data?.desc} />}
              <ul className='ioc-list'>
                {data?.list?.map((item, index) =>
                  item?.url ? (
                    <li key={index} className='ioc-list-item'>
                      <Link href={item?.url} target={item?.target || '_blank'}>
                        <RichText content={item?.title} />
                      </Link>
                    </li>
                  ) : (
                    <li key={index} className='ioc-list-item'>
                      <RichText content={item?.title} />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageOverlayContent
