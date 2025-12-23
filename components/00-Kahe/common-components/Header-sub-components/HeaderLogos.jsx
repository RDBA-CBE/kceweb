import React, { useEffect, useState } from 'react';
import { Smartphone, Mail, Facebook, Instagram, Twitter, Youtube, MessageCircle, Pin } from 'lucide-react';
import { useAppContext } from "@/context/Context";

const Header= ({ gapSpaceBetween, sticky, navigationEnd, container }) => {
  const { mobile, setMobile, isLightTheme } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${container}`}>
    <header className={`kce-hdr ${gapSpaceBetween}`}>
      <div className={`kce-hdr__container  ${navigationEnd}`}>
        <div className="kce-hdr__main-flex">
       <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
          <div className="kce-hdr__section kce-hdr__logo-area">
            <img 
              src="https://kce.ac.in/new/wp-content/uploads/2025/01/KCE-2025-LOGO-1.png" 
              alt="Karpagam College of Engineering" 
              className="kce-hdr__main-logo"
            />
          </div>

          {/* TNEA Code Section */}
          <div className="kce-hdr__section">
            <div className="kce-hdr__tnea">
              <p className="kce-hdr__tnea-label">TNEA CODE</p>
              <h1 className="kce-hdr__tnea-code">2710</h1>
            </div>
          </div>
          </div>
       <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>

          {/* Phone Section */}
          <div className="kce-hdr__section_1 ">
            <div className="kce-hdr__contact-item">
              <Smartphone className="kce-hdr__icon" size={18} strokeWidth={1.5} />
              <span>+91 - 422 2619005</span>
            </div>
          </div>

          {/* Email Section */}
          <div className="kce-hdr__section_1 ">
            <div className="kce-hdr__contact-item">
              <Mail className="kce-hdr__icon" size={18} strokeWidth={1.5} />
              <span>info@kce.ac.in</span>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="kce-hdr__section kce-hdr__socials">
            <a href="#" className="kce-hdr__social-link" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="kce-hdr__social-link" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="kce-hdr__social-link" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="kce-hdr__social-link" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href="#" className="kce-hdr__social-link" aria-label="Youtube"><Youtube size={18} /></a>
          </div>
        </div>
        </div>

      </div>
      <div className="mobile-menu-bar d-block d-xl-none">
              <div className="hamberger">
                <button
                  className="hamberger-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-menu"></i>
                </button>
              </div>
            </div>
    </header>
    </div>
  );
};

export default Header;