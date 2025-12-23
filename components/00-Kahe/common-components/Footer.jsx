import React from "react";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Radio,
} from "lucide-react";

const Footer = () => {
  const QUICK_LINKS = {
    title: "Quick Links",
    links: [
      { label: "Policies and Regulations", href: "#" },
      { label: "AICTE Extension of Approval", href: "#" },
      { label: "Anna University Provisional Affiliation", href: "#" },
      { label: "Anna University – Permanent Affiliation", href: "#" },
      { label: "Mandatory Disclosure", href: "#" },
      { label: "Accreditation Status", href: "#" },
      { label: "Statutory", href: "#" },
      { label: "Non-Statutory", href: "#" },
      { label: "Undertaking", href: "#" },
      { label: "Institute Strategic Plan", href: "#" },
      { label: "Audit Report", href: "#" },
      { label: "Handbook on Basics of Cyber Hygiene", href: "#" },
    ],
  };

  const INFO_ABOUT = {
    title: "Information About",
    links: [
      { label: "Our Campus", href: "#" },
      { label: "Cafeteria", href: "#" },
      { label: "Programmes Offered", href: "#" },
      { label: "Academic Calendar", href: "#" },
      { label: "Sports Facilities", href: "#" },
      { label: "Auditorium", href: "#" },
    ],
  };

  const E_FACILITY = {
    title: "E-Facility",
    links: [
      { label: "KCE-Help Desk", href: "#" },
      { label: "Online Feedback 1", href: "#" },
      { label: "Online Feedback 2", href: "#" },
      { label: "Course End Survey", href: "#" },
      { label: "Online payment", href: "#" },
    ],
  };

  const INFO_FOR = {
    title: "Information for",
    links: [
      { label: "Karpagam Information & Admission Center's", href: "#" },
      { label: "News and Events", href: "#" },
      { label: "Applications FAQ", href: "#" },
      { label: "Media", href: "#" },
      { label: "Alumni Success Stories", href: "#" },
      { label: "Placement", href: "#" },
      { label: "Hostel", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Admission Enquiry", href: "#" },
      { label: "Careers", href: "#" },
    ],
  };
  return (
    <footer className="kce-ftr">
    <div className="kce-ftr__container">
      {/* Column 1: Quick Links */}
      <div className="kce-ftr__col">
        <FooterColumn section={QUICK_LINKS} />
      </div>

      {/* Column 2: Information About & E-Facility */}
      <div className="kce-ftr__col">
        <FooterColumn section={INFO_ABOUT} />
        <div className="mt-8">
          <FooterColumn section={E_FACILITY} />
        </div>
      </div>

      {/* Column 3: Information for */}
      <div className="kce-ftr__col">
        <FooterColumn section={INFO_FOR} />
      </div>

      {/* Column 4: Branding & Contact */}
      <div className="kce-ftr__col">
        <div className="kce-ftr__brand-header">
          <div className="kce-ftr__college-logo">
            <div className=" p-1 rounded shadow-sm">
              <img 
                src="/images/logo/KCE-2025-LOGO-1.webp" 
                alt="KCE Logo" 
                className="h-12 w-auto"
               
              />
            </div>
           
          </div>
          
         
        </div>

        <div className="kce-ftr__contact">
          <div className="kce-ftr__contact-row">
            <MapPin className="kce-ftr__icon" size={20} />
            <p className="kce-ftr__contact-text">
              Myleripalayam Village, Othakkal Mandapam Post,<br />
              Coimbatore - 641032, Tamilnadu, India
            </p>
          </div>
          
          <div className="kce-ftr__contact-row">
            <Smartphone className="kce-ftr__icon" size={20} />
            <p className="kce-ftr__contact-text">+91 82203 33750, +91 82203 33620</p>
          </div>

          <div className="kce-ftr__contact-row">
            <Phone className="kce-ftr__icon" size={20} />
            <p className="kce-ftr__contact-text">+91 422 2619005, +91 422 2619006</p>
          </div>

          <div className="kce-ftr__contact-row">
            <Mail className="kce-ftr__icon" size={20} />
            <p className="kce-ftr__contact-text">info@kce.ac.in</p>
          </div>
        </div>

        <div className="kce-ftr__socials">
          <a href="#" className="kce-ftr__social-icon" aria-label="Facebook"><Facebook size={20} fill="currentColor" /></a>
          <a href="#" className="kce-ftr__social-icon" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="#" className="kce-ftr__social-icon" aria-label="X (Twitter)"><Twitter size={20} fill="currentColor" /></a>
          {/* <a href="#" className="kce-ftr__social-icon" aria-label="WhatsApp"><MessageCircle size={24} /></a> */}
          <a href="#" className="kce-ftr__social-icon" aria-label="Youtube"><Youtube size={20} fill="currentColor" /></a>
          {/* <a href="#" className="kce-ftr__social-icon" aria-label="Telegram"><Send size={24} /></a> */}
        </div>
      </div>
    </div>

    <hr className="kce-ftr__divider-main" />

    <div className="kce-ftr__bottom">
      <p>Copyright 2026 © Concept by repute</p>
    </div>
  </footer>
  );
};

const FooterColumn = ({ section, className = '' }) => {
  return (
    <div className="kce-ftr__section">
      <h3 className="kce-ftr__title">{section.title}</h3>
      <ul className="kce-ftr__list">
        {section.links.map((link, index) => (
          <li key={index} className="kce-ftr__item">
            <a href={link.href} className="kce-ftr__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
