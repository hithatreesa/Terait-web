import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className="antialiased"
      >
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
          {children}
        </div>
      </body>
    </html>
  );
}
