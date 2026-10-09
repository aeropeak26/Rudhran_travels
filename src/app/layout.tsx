import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://madurai-rudhran-travels.vercel.app'),
  title: "Rudhran Car Travels | Premium Outstation Taxi & Tour Packages Madurai",
  description: "Explore South India with Rudhran Car Travels. Reliable outstation cabs, tour packages for Madurai, Rameshwaram, Kodaikanal, and Ooty with transparent pricing.",
  icons: {
    icon: '/images/logo.png',
  },
  keywords: ["rudhran car travels", "madurai cab rental", "madurai to rameshwaram taxi", "madurai to kodaikanal car package", "outstation taxi madurai"],
  openGraph: {
    title: "Rudhran Car Travels - Drive Your Dreams",
    description: "Premium car rental, outstation journeys, and curated tour packages across South India.",
    url: 'https://madurai-rudhran-travels.vercel.app',
    siteName: 'Rudhran Car Travels',
    images: [
      {
        url: '/images/logo.png', // This uses the logo in public folder
        width: 800,
        height: 600,
        alt: 'Rudhran Travels Logo',
      },
    ],
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudhran Car Travels',
    description: 'Premium car rental and curated tour packages across South India.',
    images: ['/images/logo.png'],
  },
};

import FloatingContact from "@/components/FloatingContact";
import SplashScreen from "@/components/SplashScreen";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <SplashScreen />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
