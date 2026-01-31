"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/kce/logo/KCE-logo-color.png";

import { useAppContext } from "@/context/Context";
import Nav from "./Header-sub-components/Nav";
import MobileMenuNav from "./Header-sub-components/MobileMenuNav";
import { Mail, Smartphone } from "lucide-react";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu kahe ${mobile ? "" : "active"}`}>
        <div className="backdrop" onClick={() => setMobile(!mobile)}></div>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content pe-0">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>

            <ul className="navbar-top-left rbt-information-list justify-content-start mt-5 g-3">
              <li>
                <a className="kce-hdr__contact-item" href="tel:914222619005">
                  <Smartphone
                    className="kce-hdr__icon"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <span>+91 - 422 2619005</span>
                </a>
              </li>
              <li>
                <a
                  className="kce-hdr__contact-item"
                  href="mailto:info@kce.ac.in"
                >
                  <Mail className="kce-hdr__icon" size={18} strokeWidth={1.5} />
                  <span>info@kce.ac.in</span>
                </a>
              </li>
            </ul>
          </div>

          <MobileMenuNav />

          <div className="mobile-menu-bottom">
            <div className="social-share-wrapper">
              <ul className="social-icon social-default transparent-with-border justify-content-start ">
                <li>
                  <Link href="https://www.facebook.com/wekceians/">
                    <i className="fab fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/wekceians">
                   𝕏
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/wekceians/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@wekceians">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                 <li>
                  <Link href="https://www.youtube.com/@wekceians">
                    <i className=" fab fa-pinterest"></i>
                  </Link>
                </li>
                 <li>
                  <Link href="https://www.youtube.com/@wekceians">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
