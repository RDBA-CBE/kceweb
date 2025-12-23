"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo/logo.png";

import { useAppContext } from "@/context/Context";
import Nav from "./Header-sub-components/Nav";
import MobileMenuNav from "./Header-sub-components/MobileMenuNav";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();


  return (
    <>
      <div className={`popup-mobile-menu kahe ${mobile ? "" : "active"}`}>
        <div className="backdrop" onClick={() => setMobile(!mobile)}></div>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
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
            <p className="description">
              Histudy is a education website template. You can customize all.
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href="mailto:hello@example.com">
                  <i className="feather-mail"></i>example@gmail.com
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="feather-phone"></i>(302) 555-0107
                </Link>
              </li>
            </ul>
          </div>

          <MobileMenuNav />

          <div className="mobile-menu-bottom">
            <div className="social-share-wrapper">
            
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
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
