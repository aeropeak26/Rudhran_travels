import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rudhran Car Travels | Premium Outstation Taxi & Tour Packages Madurai",
  description: "Explore South India with Rudhran Car Travels. Reliable outstation cabs, tour packages for Madurai, Rameshwaram, Kodaikanal, and Ooty with transparent pricing.",
  keywords: ["rudhran car travels", "madurai cab rental", "madurai to rameshwaram taxi", "madurai to kodaikanal car package", "outstation taxi madurai"],
  openGraph: {
    title: "Rudhran Car Travels - Drive Your Dreams",
    description: "Premium car rental, outstation journeys, and curated tour packages across South India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
