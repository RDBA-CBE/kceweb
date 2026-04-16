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
