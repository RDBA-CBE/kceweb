'use client';

import React from 'react';
import SideMenu from '@/components/00-KCE/ABOUT/sideMenu';
import data from '@/JSON/CONTACT/contact.json';
import InnerBanner from '@/components/00-KCE/common/InnerBanner';
import { department } from '@/utils/constant.util';

const ContactPage = () => {
  const { pageTitle, sections, socialLinks, cta } = data;

  return (
    <section className='about-wrapper'>
      <InnerBanner data={data?.banner} />

      
    </section>
  );
};


export default ContactPage;
