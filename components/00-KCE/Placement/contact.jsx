'use client'
import React from 'react'
import data from '@/JSON/placements/contact.json'
import InnerBanner from '@/components/00-KCE/common/InnerBanner'
import RenderSection from '@/components/00-KCE/RenderComponent/RenderSection'
import SideMenu from '@/components/00-KCE/ABOUT/sideMenu'
import sideBarData from '@/JSON/sidebar.json'

export default function ContactPage () {
  const pageData = data
  const renderSectionWrapper = (section, index) => {
    return (
      <RenderSection
        section={section}
        index={index}
        renderSection={renderSectionWrapper}
      />
    )
  }

  return (
    <section className=''>
      <InnerBanner data={pageData?.banner} />
      <div className='section-wid section-bg1 '>
        <div className='row sidebar-com'>
          {/* LEFT CONTENT */}
          <div className='col-lg-9'>
            {pageData?.sections?.map((section, index) =>
              renderSectionWrapper(section, index)
            )}
          </div>

          {/* RIGHT STICKY MENU */}
          <SideMenu data={sideBarData?.examination} />
        </div>
      </div>
    </section>
  )
}
