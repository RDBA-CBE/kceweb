import { headers } from "next/headers";
import { SITE_CANONICAL_ORIGIN } from "@/constants/site";
import ClientRootLayout from "./ClientRootLayout";

/**
 * Canonical + metadataBase for all routes except /KCE/* (those skip global canonical).
 * Requires middleware x-pathname. Dynamic root ensures headers() is available at render.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "/";

  const base = {
    metadataBase: new URL(SITE_CANONICAL_ORIGIN),
  };

  if (pathname.startsWith("/KCE")) {
    return base;
  }

  const canonical = new URL(pathname, `${SITE_CANONICAL_ORIGIN}/`).href;

  return {
    ...base,
    alternates: {
      canonical,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ9V63D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
