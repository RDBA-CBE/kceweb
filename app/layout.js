"use client";

import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import BackToTop from "./backToTop";
import Separator from "@/components/00-Kahe/common-components/Footer-sub-components/Seperator";
import MobileMenu from "@/components/00-Kahe/common-components/MobileMenu";
import HeaderEight from "@/components/Header/Headers/Header-Eight";
import Footer from "@/components/00-Kahe/common-components/Footer";
import Header from "@/components/00-Kahe/common-components/Header";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en" dir="ltr">
      <body className="" suppressHydrationWarning={true}>
        <Provider store={Store}>
          <Context>
            <MobileMenu />
            <Header headerSticky="rbt-sticky" headerType="" />
            {children}
            <BackToTop />
            {/* <Separator /> */}
            <Footer />
          </Context>
        </Provider>
      </body>
    </html>
  );
}
