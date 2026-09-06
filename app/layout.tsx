import type { Metadata } from "next";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UMTAZ Clothing | Traditional & Modern Tailoring",
    template: "%s | UMTAZ Clothing",
  },
  description:
    "UMTAZ Clothing creates premium traditional and contemporary outfits tailored to your style and measurements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}