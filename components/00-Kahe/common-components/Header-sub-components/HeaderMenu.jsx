"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import logo from "../../../../public/images/logo/logo.png";
import logoLight from "../../../../public/images/dark/logo/logo-light.png";

import Nav from "./Nav";

const HeaderMenu = ({ gapSpaceBetween, sticky, navigationEnd, container }) => {
  const {
    mobile,
    setMobile,
    isLightTheme,
  } = useAppContext();
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
    <>
      <div
        className={`rbt-header-wrapper d-none d-xl-block ${gapSpaceBetween} ${sticky} ${
          isSticky ? "rbt-sticky" : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            
            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
