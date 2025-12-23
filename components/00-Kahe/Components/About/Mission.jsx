import StudentsIcon from '@/public/images/Kahe/icons/StudentsIcon'
import { FirstLetterUp } from '@/utils/functions.utils'
import Link from 'next/link'
import React from 'react'

const Mission = ({ title, buttonText, buttonLink, missionItems }) => {
  return (
    <div className="rbt-service-area rbt-section-gap mt-0 pt-0 mission section-wid">
      <div className="container-fluid">
        
        {/* Header Row */}
        <div className="row mb--60 g-5 align-items-end">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="section-title text-start">
              <h4 className="decor-ti">{FirstLetterUp(title)}</h4>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="read-more-btn text-start text-md-end">
              <Link className="rbt-moderbt-btn" href={buttonLink || "#"}>
                <span className="moderbt-btn-text">{buttonText}</span>
                <i className="feather-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="container-fluid">
          <div className="row row--15 mt_dec--30 justify-content-center justify-content-xl-between gap-2">

            {missionItems?.map((item, index) => (
              <div
                className="col-xl-2 col-md-3 col-12 p-0 mt--30"
                key={index}
              >
                <div className="service-card service-card-6">
                  <div className="inner">
                    <div className="icon">
                      {item.icon || <StudentsIcon />}
                    </div>

                    <div className="content">
                      <p >{item.description}</p>
                    </div>

                    <span className="number-text">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Mission
