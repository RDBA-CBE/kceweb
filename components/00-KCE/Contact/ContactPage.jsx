'use client';

import React from 'react';
import SideMenu from '@/components/00-KCE/ABOUT/sideMenu';
import data from '@/JSON/CONTACT/contact.json';
import InnerBanner from '@/components/00-KCE/common/InnerBanner';
import { department } from '@/utils/constant.util';


const ContactPage = () => {
  const { leftCard, leftImage, form, placementStrip } = data;

  return (
    <section className="contact-page">
      <InnerBanner data={data.banner} />

      
    </section>
  );
};


export default ContactPage;
