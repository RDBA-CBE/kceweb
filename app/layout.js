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
import "../public/css/plugins/monoscans.css";
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
import Header from "@/components/00-Kahe/common-components/Header";
import Footer from "@/components/00-Kahe/common-components/Footer";
import BottomPlacement from "@/components/00-KCE/common/BottomPlacement";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ✅ GOOGLE FONT – MONA SANS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJ9V63D');`,
          }}
        />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "@id": "https://www.kce.ac.in/#organization",
        "name": "Karpagam College of Engineering",
        "alternateName": "KCE",
        "url": "https://www.kce.ac.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kce.ac.in/images/kce/logo/KCE-logo-color.png",
          "width": 137,
          "height": 45
        },
        "image": "https://www.kce.ac.in/images/kce/home/banner/b1.jpg",
        "description": "Karpagam College of Engineering (KCE) is a NAAC A+ accredited autonomous engineering college in Coimbatore, Tamil Nadu.",
        "foundingDate": "2000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Myleripalayam Road, Othakkalmandapam",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641032",
          "addressCountry": "IN"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.kce.ac.in/#website",
        "url": "https://www.kce.ac.in",
        "name": "Karpagam College of Engineering"
      }
    ])
  }}
/>
        
      </head>

      <body suppressHydrationWarning={true}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ9V63D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Provider store={Store}>
          <Context>
            <MobileMenu />
            <Header headerSticky="rbt-sticky" headerType="" />
            {children}
            <BackToTop />
            {/* <Separator /> */}
            <BottomPlacement />
            <Footer />
          </Context>
        </Provider>
      </body>
    </html>
  );
}