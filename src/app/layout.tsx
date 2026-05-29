import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Performance Fitness Training | Move Better. Feel Stronger. Live Healthier.",
  description:
    "Performance Fitness Training and Rehabilitation (PFT) — a premium, evidence-based and individualised approach to health, performance and rehabilitation, led by National-level Olympic weightlifter and Exercise Physiologist Jake Sbroja.",
  keywords: [
    "personal training",
    "exercise physiology",
    "rehabilitation",
    "strength and conditioning",
    "Canberra personal trainer",
    "NDIS exercise",
    "PFT",
  ],
  openGraph: {
    title: "Performance Fitness Training",
    description: "Move Better. Feel Stronger. Live Healthier.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
