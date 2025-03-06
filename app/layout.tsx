import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/inc/Nav";

export const metadata: Metadata = {
  title: "Takip Kira",
  description: "Takip Kira",
};
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} antialiased text-[#010F34]`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
