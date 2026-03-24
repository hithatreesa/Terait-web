import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://terait-web.vercel.app'),
  title: {
    default: "Terait Technologies | IT Services & Security Solutions in Bangalore",
    template: "%s | Terait Technologies"
  },
  description: "Terait Technologies provides enterprise IT solutions in Bangalore: Networking, Cloud Services (AWS/Azure), CCTV Installation, and Cybersecurity.",
  keywords: [
    "IT services Bangalore",
    "CCTV installation Bangalore",
    "Cloud services Bangalore",
    "Networking solutions Bangalore",
    "IT Infrastructure Bangalore",
    "Cybersecurity services Bangalore",
    "Enterprise IT Solutions"
  ],
  authors: [{ name: "Terait Technologies" }],
  creator: "Terait Technologies",
  publisher: "Terait Technologies",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://terait-web.vercel.app",
    siteName: "Terait Technologies",
    title: "Terait Technologies | IT Services & Security Solutions in Bangalore",
    description: "Expert IT networking, CCTV installation, and managed cloud services in Bangalore.",
    images: [
      {
        url: "/images/hero_enterprise_it.jpg",
        width: 1200,
        height: 630,
        alt: "Terait Technologies IT Solutions Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terait Technologies | IT Services & Infrastructure",
    description: "Complete IT infrastructure and surveillance solutions in Bangalore.",
    images: ["/images/hero_enterprise_it.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Terait Technologies",
    "image": "https://terait-web.vercel.app/images/hero_enterprise_it.jpg",
    "@id": "https://terait-web.vercel.app",
    "url": "https://terait-web.vercel.app",
    "telephone": ["+919964546464", "+91843364331"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#24, 100 Feet Rd, HRBR Layout",
      "addressLocality": "Bangalore",
      "postalCode": "560043",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.013885,
      "longitude": 77.648525
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "18:30"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
          {children}
          <WhatsAppButton />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
