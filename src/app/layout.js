import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Crown Ink Tattooz Studio | Premium Tattoo Art — Greater Noida",
  description:
    "CrownInk Tattooz is a premium tattoo studio in Greater Noida specialising in custom blackwork, fine line, Japanese, and geometric tattoo art.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="bg-[#1c1c1c] text-[#f5f5f5] antialiased">{children}</body>
    </html>
  );
}