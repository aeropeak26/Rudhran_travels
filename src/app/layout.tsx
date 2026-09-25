import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AeroDrive Cabs | Premium Car Rental & Outstation Taxi Services",
  description: "Book outstation cabs, local hourly car rentals, and airport taxis across Tamil Nadu and South India with verified drivers, sanitized vehicles, and zero hidden charges.",
  keywords: ["outstation cab booking", "car rental chennai", "rameshwaram taxi package", "ooty tour car", "sedan suv rental south india", "aerodrive cabs"],
  openGraph: {
    title: "AeroDrive Cabs - Rent Your Perfect Car Drive Your Dreams",
    description: "Experience luxury, comfort, and reliability with our top-tier rental fleet and outstation tour packages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
