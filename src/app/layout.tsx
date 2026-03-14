import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL('https://terait.com'),
  title: {
    default: "Terait Technologies | IT Infrastructure & Security Solutions Bangalore",
    template: "%s | Terait Technologies"
  },
  description: "Terait Technologies provides complete IT Infrastructure Solutions in Bangalore: Networking, CCTV Installation, Server Setup, and Managed Cloud Services.",
  keywords: ["IT Infrastructure Bangalore", "CCTV Installation Bangalore", "Networking Services", "Server Management", "Cloud Solutions", "IT Support Bangalore", "Enterprise IT Solutions"],
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
    url: "https://terait.com",
    siteName: "Terait Technologies",
    title: "Terait Technologies | IT Infrastructure & Security Solutions",
    description: "Expert IT networking, CCTV installation, and managed services in Bangalore.",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Terait Technologies Infrastructure Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terait Technologies | IT Infrastructure Solutions",
    description: "Complete IT infrastructure and surveillance solutions in Bangalore.",
    images: ["/images/hero_bg.png"],
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased"
      >
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
          {children}
          {/* 
            Production Analytics:
            Add Google Analytics or other scripts here using next/script 
            example: <Script src="..." strategy="afterInteractive" />
          */}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
