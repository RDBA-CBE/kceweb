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
import { FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const QUICK_LINKS = {
    title: "QUICK LINKS",
    links: [
      {
        label: "Policies and Regulations",
        href: "https://kce.ac.in/new/wp-content/uploads/2024/08/KCE_Policies_Rules-2024-25.pdf",
        target: "_blank",
      },
      {
        label: "AICTE Extension of Approval",
        href: "/KCE/approvals/aicte-eoa/",
      },
      {
        label: "Anna University Provisional Affiliation",
        href: "https://kce.ac.in/new/wp-content/uploads/2026/01/Anna-University-Affiliation-Copy-2025-26.pdf",
        target: "_blank",
      },
      {
        label: "Anna University – Permanent Affiliation",
        href: "https://kce.ac.in/new/wp-content/uploads/2021/11/Anna-University-Permanent-Affiliation.pdf",
        target: "_blank",
      },
      { label: "Mandatory Disclosure", href: "/KCE/mandatory-disclosure/" },
      { label: "Accreditation Status", href: "/KCE/accreditations/" },
      { label: "Statutory", href: "/KCE/statutory/" },
      { label: "Non-Statutory", href: "/KCE/non-statutory/" },
      { label: "Undertaking", href: "/KCE/undertaking/" },
      {
        label: "Institute Strategic Plan",
        href: "https://kce.ac.in/new/wp-content/uploads/2024/08/INSTITUTE-STRATEGIC-PLAN.pdf",
        target: "_blank",
      },
      { label: "Audit Report", href: "/KCE//audit-report/" },
      {
        label: "Handbook on Basics of Cyber Hygiene",
        href: "https://kce.ac.in/new/wp-content/uploads/2025/09/4580600_A_Handbook_on_Basics_of_Cyber_Hygiene.pdf",
        target: "_blank",
      },
    ],
  };

  const INFO_ABOUT = {
    title: "INFORMATION ABOUT",
    links: [
      { label: "Our Campus", href: "/KCE/infrastructure/" },
      { label: "Cafeteria", href: "/KCE/infrastructure/cafeteria/" },
      { label: "Programmes Offered", href: "/KCE/courses-offered/" },
      { label: "Academic Calendar", href: "/KCE//academic-calendar/" },
      { label: "Sports Facilities", href: "/KCE/sports-facilities/" },
      { label: "Auditorium", href: "/KCE/auditorium/" },
      { label: "E-FACILITY", href: "/KCE/e-facility/" },

      {
        label: "KCE-Help Desk",
        href: "https://drive.google.com/drive/folders/1ooIcWCkks3XBnaLNZ3gugEjpfeRPVh8J",
        target: "_blank",
      },
      {
        label: "Online Feedback 1",
        href: "http://121.200.48.27:8080/feedback1/login.php",
        target: "_blank",
      },
      {
        label: "Online Feedback 2",
        href: "http://121.200.48.27:8080/feedback2/login.php",
        target: "_blank",
      },
      {
        label: "Course End Survey",
        href: "http://121.200.48.27:8080/ces/login.php",
        target: "_blank",
      },
      {
        label: "Online payment",
        href: "https://admissions.kifees.com/",
        target: "_blank",
      },
    ],
  };

  const E_FACILITY = {
    title: "E-Facility",
    links: [],
  };

  const INFO_FOR = {
    title: " INFORMATION FOR",
    links: [
      {
        label: "Karpagam Information & Admission Center's",
        href: "/KCE/karpagam-information-admission-centers/",
      },
      {
        label: "News and Events",
        href: "https://kce.ac.in/category/news-event/",
        target: "_blank",
      },
      { label: "Applications FAQ", href: "#" },
      { label: "Media", href: "/KCE/photo-gallery/" },
      { label: "Alumni Success Stories", href: "/KCE/alumni-success-stories/" },
      { label: "Placement", href: "/KCE/overview/" },
      { label: "Hostel", href: "/KCE/infrastructure/hostel/" },
      { label: "Blog", href: "https://kce.ac.in/blog/", target: "_blank" },
      {
        label: "Admission Enquiry",
        href: "https://admission.kce.ac.in/",
        target: "_blank",
      },
      { label: "Careers", href: "/KCE//careers/" },
    ],
  };
  return (
    <footer className="kce-ftr">
      <div className="kce-ftr__container section-wid">
        {/* Column 1: Quick Links */}
        <div className="kce-ftr__col">
          <FooterColumn section={QUICK_LINKS} />
        </div>

        {/* Column 2: Information About & E-Facility */}
        <div className="kce-ftr__col">
          <FooterColumn section={INFO_ABOUT} />
          {/* <div className="mt-8">
          <FooterColumn section={E_FACILITY} />
        </div> */}
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
                  src="/images/kce/logo/KCE-logo-white.png"
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
                Myleripalayam Village, Othakkal Mandapam Post,
                <br />
                Coimbatore - 641032, Tamilnadu, India
              </p>
            </div>

            <div className="kce-ftr__contact-row">
              <Smartphone className="kce-ftr__icon" size={20} />
              <p className="kce-ftr__contact-text">
                <a href="tel:918220333750" >+91 82203 33750</a>,{" "}
                <a href="tel:918220333620" >+91 82203 33620</a>{" "}
              </p>
            </div>

            <div className="kce-ftr__contact-row">
              <Phone className="kce-ftr__icon" size={20} />
              <p className="kce-ftr__contact-text">
                <a href="tel:914222619005">+91 422 2619005</a>, <a href="tel:914222619006" >+91 422 2619006</a>
              </p>
            </div>

            <div className="kce-ftr__contact-row">
              <Mail className="kce-ftr__icon" size={20} />
              <p className="kce-ftr__contact-text"><a href="mailto:info@kce.ac.in" target="_blank">info@kce.ac.in</a></p>
            </div>
          </div>

          <div className="kce-ftr__socials">
            <a
              href="https://www.facebook.com/wekceians/"
              className="kce-ftr__social-icon"
              aria-label="Facebook"
              target="_blank"
            >
              <Facebook size={20} fill="currentColor" target="_blank" />
            </a>
            <a
              href="https://www.instagram.com/wekceians/"
              className="kce-ftr__social-icon"
              aria-label="Instagram"
              target="_blank"
            >
              <Instagram size={20} target="_blank" />
            </a>
            <a
              href="https://x.com/wekceians"
              className="kce-ftr__social-icon"
              aria-label="X (Twitter)"
              style={{ fontSize: "20px" }}
              target="_blank"
            >
              𝕏
            </a>
            {/* <a href="#" className="kce-ftr__social-icon" aria-label="WhatsApp"><MessageCircle size={24} /></a> */}
            <a
              href="https://www.youtube.com/@wekceians"
              className="kce-ftr__social-icon"
              aria-label="Youtube"
              target="_blank"
            >
              <FaYoutube size={20} fill="currentColor" target="_blank" />
            </a>
            <a
              href="https://in.pinterest.com/wekceians/"
              className="kce-ftr__social-icon"
              aria-label="Youtube"
              target="_blank"
            >
              <FaPinterest size={20} fill="currentColor" target="_blank" />
            </a>
            <a
              href="https://www.linkedin.com/school/wekceians/"
              className="kce-ftr__social-icon"
              aria-label="Youtube"
              target="_blank"
            >
              <FaLinkedin size={20} fill="currentColor" target="_blank" />
            </a>
            {/* <a href="#" className="kce-ftr__social-icon" aria-label="Telegram"><Send size={24} /></a> */}
          </div>
          <p className="ftrcopy">
            Copyright 2026 © KCE. Concept by{" "}
            <a href="https://irepute.in" target="_blank">
              repute
            </a>
          </p>
        </div>
      </div>

      <div className="kce-ftr__bottom">
      <img src="/images/kce/home/karpagam-footer.webp" />
    </div>
    </footer>
  );
};

const FooterColumn = ({ section, className = "" }) => {
  return (
    <div className="kce-ftr__section">
      <h3 className="kce-ftr__title">{section.title}</h3>
      <ul className="kce-ftr__list">
        {section.links.map((link, index) => (
          <li key={index} className="kce-ftr__item">
            <a href={link.href} className="kce-ftr__link" target={link?.target}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
