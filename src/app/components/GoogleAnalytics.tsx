// 2026-08-20: Etiqueta Google (gtag.js) para Analytics / Ads en todo el portal.
import Script from "next/script";
import { SITE_GA_ID } from "@/lib/seo/site-config";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE_GA_ID}');
        `}
      </Script>
    </>
  );
}
