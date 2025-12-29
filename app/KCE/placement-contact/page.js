"use client"
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import '@/public/scss/kce/placement/training.scss';
import InnerBanner from '@/components/KCE/common/InnerBanner';
import { department } from '@/utils/constant.util';

export default function PlacementContact() {
  return (
    <>
     <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
    <section className="placement-contact-wrapper">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="contact-image-card">
              <img
                src="/images/kce/b1-940x360-1-435x280.webp"
                alt="The Future is Bright"
                className="contact-hero-image"
              />
            
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="col-lg-6">
            <div className="contact-info-section">
              <div className="contact-item">
                <MapPin size={24} className="contact-icon" />
                <div className="contact-details">
                  <h3 className="contact-title">S.Azarudheen - Manager Corporate Relations</h3>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={24} className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-text">+91 73730 07702 / 0422-2619047</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={24} className="contact-icon" />
                <div className="contact-details">
                  <p className="contact-text">placement@kce.ac.in</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link youtube">
                  <Youtube size={20} />
                </a>
                <a href="#" className="social-link instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
