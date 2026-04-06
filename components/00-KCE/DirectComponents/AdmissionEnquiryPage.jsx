
'use client'
import React from 'react'
import data from "@/JSON/admission_enquiry.json";

import InnerBanner from '@/components/00-KCE/common/InnerBanner'
import RenderSection from '@/components/00-KCE/RenderComponent/RenderSection'
import AdmissionEnquiryForm from './AdmissionEnquiryForm';

export default function AdmissionEnquiryPage () {
  const pageData = data
  const renderSectionWrapper = (section, index) => {
    return (
      <RenderSection
        key={index}
        section={section}
        index={index}
        renderSection={renderSectionWrapper}
      />
    )
  }

  return (
    <>
      <InnerBanner data={pageData?.banner} />

      {pageData?.sections?.map((section, index) =>
        renderSectionWrapper(section, index)
      )}

      <AdmissionEnquiryForm/>
    </>
  )
}