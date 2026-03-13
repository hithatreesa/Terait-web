import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Terait Technologies | IT Infrastructure & Security Solutions",
  description: "Complete IT Infrastructure Solutions in Bangalore: Networking, CCTV Installation, Server Setup, and Hardware Supply.",
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
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
