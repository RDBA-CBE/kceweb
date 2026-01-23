'use client';

import React from 'react';
import SideMenu1 from '@/components/00-KCE/Examinations/sideMenu1.js';
import data from '@/JSON/EXAMINATION/DOWNLOADS/page.json';
import InnerBanner from '@/components/00-KCE/common/InnerBanner';
import { department } from '@/utils/constant.util';

const Downloads = () => {
  const { pageTitle, sections, socialLinks, cta } = data;

  return (
    <section className='about-wrapper'>
      <InnerBanner data={data?.banner} />
    </section>
  );
};

export default Downloads;
